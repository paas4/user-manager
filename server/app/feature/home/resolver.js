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

    register({ username, password, name, stuid }) {
        if (!username) {
            throw new ShareError(403403, '非法用户名')
        }
        if (!password) {
            throw new ShareError(403403, '空密码')
        }
        return Auth.register({ username, password, name, stuid })
    }

    remoteLogin({ ticket }) {
        if (!ticket) {
            throw new ShareError(403403, '缺少Ticket')
        }
        return Auth.remoteLogin(ticket)
    }
}

module.exports = new HomeResolver
