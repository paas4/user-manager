const sid = require('shortid')
const db = require(':db').mysql
const SequelizeApp = require('./sequelize')

class User extends SequelizeApp {
    constructor() {
        super({ Master: db.users })
    }

    create({ name, stuid, username, password }) {
        return super.create({
            name,
            stuid,
            username,
            password,
        })
    }
}

module.exports = new User
