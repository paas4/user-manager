const md5 = require('md5')
const User = require('../controller/user')
const Resolver = require('~/class/resolver')

class UserResolver extends Resolver {

    async get(id) {
        const user = await User.findOne({ id })
        delete user.password
        return user
    }

    async gets({ page, size }) {
        const limit = [size * (page - 1), size]
        const users = await User.find({}, { limit })
        users.forEach(user => delete user.password)

        return {
            page, size,
            total: await User.count(),
            list: users,
        }
    }

    async update(params) {
        const id = params.id
        if (params.password) {
            params.password = md5(params.password)
        }
        return User.update({ id }, params)
    }
}

module.exports = new UserResolver
