const sid = require('shortid')
const db = require(':db').mysql
const SequelizeApp = require('./sequelize')

class Lab extends SequelizeApp {
    constructor() {
        super({ Master: db.labs })
    }

    create(lab) {
        return super.create({
            sid: sid(),
            ...lab,
        })
    }
}

module.exports = new Lab
