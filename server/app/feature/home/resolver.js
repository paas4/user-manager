const Resolver = require('~/class/resolver')

class HomeResolver extends Resolver {

    ROOT(query) {
        return query
    }

    login(code) {
        if (!code) {
            return {
                code: 402001,
                message: '登录失败，缺少code'
            }
        }
        return {
            code: 0,
            message: 'ok'
        }
    }
}

module.exports = new HomeResolver
