const Auth = require(':controller/auth')
const ShareError = require('~/lib/shareError')
const Resolver = require('~/class/resolver')

class HomeResolver extends Resolver {

    ROOT(query) {
        return query
    }

    login({ username, password}) {
        if (!username || !password) {
            throw new ShareError(403403, '用户名或密码错误')
        }
        return Auth.login({ username, password })
    }

    register({ username, password }) {
        if (!username) {
            throw new ShareError(403403, '非法用户名')
        }
        if (!password) {
            throw new ShareError(403403, '空密码')
        }
        return Auth.register({ username, password })
    }
}

module.exports = new HomeResolver
