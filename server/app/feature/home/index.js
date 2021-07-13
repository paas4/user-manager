const append = require('~/common/router/append')
const resolver = require('./resolver')
const router = module.exports = require('koa-router')()

router.get('/check', (ctx) => {
    ctx.body = 'ok'
})

append(router, resolver, {

    get_ROOT(ctx) {
        return ctx.query
    },

    // 登录
    post_login(ctx) {
        return ctx.request.body
    },

    // 注册
    post_register(ctx) {
        return ctx.request.body
    },

    // iLab登录
    get_remoteLogin(ctx) {
        return ctx.query
    }
})
