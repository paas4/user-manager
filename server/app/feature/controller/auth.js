// 登录关系
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const User = require('./user')
const api = require('~/config/api')
const assert = require('~/lib/assert')
const ShareError = require('~/lib/shareError')

class Auth {

    async login({ username, password }) {
        const user = await User.findOne({ username, password: md5(password) })
        assert.ok(user, 401401, '用户名或密码错误')
        return this.token(user)
    }

    async register({ username, password, name, stuid }) {
        let user = await User.findOne({ username })

        assert.ok(!user, 403100, '用户已存在')

        // 注册用户
        user = await User.create({ username, password: md5(password), name, stuid })
        return this.token(user)
    }

    // 微信登录code
    // 使用code向微信请求 openid
    async getWechatUser(code) {
        const data = await wechat.getToken(code)
        return { openid: data.openid }
    }

    token(user) {
        return {
            id: user.id,
            admin: user.admin,
            token: jwt.sign({ id: user.id }, api.secret, {
                expiresIn: api.timeout
            }),
            // refresh_token: jwt.sign({ uid: user.uid, grant_type: 'refresh' }, api.secret, {
            //     expiresIn: api.refreshTimeout
            // })
        }
    }

    refreshToken(refreshToken) {
        try {
            const decode = jwt.verify(refreshToken, api.secret)
            if (decode.grant_type) {
                return this.token({ uid: decode.uid })
            }
            throw new ShareError(401404, 'Authentication Error')
        }
        catch(err) {
            if (err.message === 'jwt expired') {
                throw new ShareError({
                    code: 401405,
                    message: 'JWT expired',
                    stack: err.stack
                })
            }
            if (err.message === 'invalid signature') {
                throw new ShareError({
                    code: 401406,
                    message: 'Invalid token',
                    stack: err.stack
                })
            }
            throw new ShareError(401407, err)
        }
    }
}

module.exports = new Auth
