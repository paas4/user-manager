const sid = require('shortid')
const db = require(':db').mysql
const SequelizeApp = require('./sequelize')
const uuid = require('uuid')

class Lab extends SequelizeApp {
    constructor() {
        super({ Master: db.labs })
    }

    create(lab) {
        return super.create({
            // sid: sid(),
            sid: uuid.v4().replace(/-/g, ''),
            ...lab,
        })
    }
}

module.exports = new Lab
