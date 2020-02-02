const assert = require('assert')
const moment = require('moment')
const { Op } = require('sequelize')

class SequelizeApp {
    constructor({ Master }) {
        this.Master = Master
    }

    async create(defaults, options) {
        let doc = await this.Master.create(defaults, options)
        doc = this.getRawData(doc)
        doc = this.timeFixed(doc)
        return doc
    }

    async findOrCreate(querys, defaults, options) {
        assert(querys, '缺少查询条件querys')
        assert(defaults, '缺少创建条件defaults')
        if (!options) {
            options = {}
        }
        options.where = querys
        options.defaults = defaults
        return this.Master.findOrCreate(options).spread((doc, created) => doc)
    }

    async find() {
        return this.findAll(...arguments)
    }

    async findOne(querys, options) {
        if (!options) {
            options = {}
        }
        options.limit = 1
        const docs = await this.findAll(querys, options)
        return docs[0]
    }

    async findAll(querys, options) {
        options = options || {}
        options.where = querys
        options.raw = 'raw' in options ? options.raw : true
        const docs = await this.Master.findAll(options)
        return docs.map(item => {
            return this.timeFixed(item)
        })
    }

    async findAllToday(querys) {
        querys.created_at = {
            [Op.gt]: moment().format('YYYY-MM-DD'),
        }
        return this.findAll(querys)
    }

    async update(querys, values, options) {
        assert(querys, '缺少查询条件querys')
        assert(values, '缺少更新条件values')
        if (!options) {
            options = {}
        }
        options.where = querys
        return this.Master.update(values, options)
    }

    async delete(querys, options) {
        options = options || {}
        options.where = querys
        return this.Master.destroy(options)
    }

    async countToday(querys) {
        querys.created_at = {
            [Op.gt]: moment().format('YYYY-MM-DD'),
        }
        return this.Master.count({ where: querys })
    }

    async count(querys) {
        return this.Master.count({ where: querys })
    }

    async has(querys) {
        return (await this.Master.count({ where: querys })) > 0
    }

    async hasToday(querys) {
        querys.created_at = {
            [Op.gt]: moment().format('YYYY-MM-DD'),
        }
        return (await this.Master.count({ where: querys })) > 0
    }

    dateFormat(date) {
        return date ? moment(date).format('YYYY-MM-DD HH:mm:ss') : date
    }

    getFrom(obj, attrs) {
        const ret = {}
        attrs.forEach(attr => (ret[attr] = obj[attr]))
        return ret
    }

    // 是否是Sequelize实例对象
    isSeqObject(obj) {
        return obj.get && 'function' === typeof obj.get ? true : false
    }

    // 查询Sequelize实例原始数据
    getRawData(data) {
        return this.isSeqObject(data) ? data.get() : data
    }

    // 修正时区问题
    timeFixed(doc) {
        doc.created_at = this.dateFormat(doc.created_at)
        doc.updated_at = this.dateFormat(doc.updated_at)
        doc.expired_at ? (doc.expired_at = this.dateFormat(doc.expired_at)) : void 0
        doc.finished_expired_at
            ? (doc.finished_expired_at = this.dateFormat(doc.finished_expired_at))
            : void 0
        return doc
    }

    static create() {
        return new this(...arguments)
    }
}

module.exports = SequelizeApp
