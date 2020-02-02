const assert = require('~/lib/assert')
const User = require('../controller/user')
const Resolver = require('~/class/resolver')
const attrs = require('~/config/app/attrs')

class UserResolver extends Resolver {

    getUser(uid) {
        assert.ok(uid, 400010, '非法参数')
        return User.findOne({ uid }, { attributes: attrs.getUser })
    }
}

module.exports = new UserResolver
