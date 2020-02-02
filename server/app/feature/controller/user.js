const sid = require('shortid')
const db = require(':db').mysql
const SequelizeApp = require('./sequelize')

class User extends SequelizeApp {
    constructor() {
        super({ Master: db.users })
    }

    create({ username, password }) {
        return super.create({
            uid: sid.generate(),
            username,
            password,
        })
    }
}

module.exports = new User
