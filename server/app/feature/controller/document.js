const sid = require('shortid')
const db = require(':db').mysql
const SequelizeApp = require('./sequelize')

class Document extends SequelizeApp {
    constructor() {
        super({ Master: db.documents })
    }

    create(document) {
        return super.create({
            ...document,
            score: 0,
            status: 0
        })
    }
}

module.exports = new Document
