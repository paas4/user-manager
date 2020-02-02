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

    get_login(ctx) {
        return ctx.query.code
    }
})
