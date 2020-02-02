const shortid = require('shortid')
const db = require(':db').mysql
const SequelizeApp = require('./sequelize')

class User extends SequelizeApp {
    constructor() {
        super({ Master: db.users })
    }

    async beforeCreate() {

    }

    // 创建用户
    async create({ openid }) {
        await this.beforeCreate()
        const defaults = {
            uid: shortid.generate(),
            openid
        }
        return await super.create(defaults)
    }
}

module.exports = new User
