const sid = require('shortid')
const db = require(':db').mysql
const SequelizeApp = require('./sequelize')

class User extends SequelizeApp {
    constructor() {
        super({ Master: db.users })
    }

    create({ un, name, stuid, username, password }) {
        return super.create({
            un,
            name,
            stuid,
            username,
            password,
        })
    }
}

module.exports = new User
