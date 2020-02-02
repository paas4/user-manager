const append = require('~/common/router/append')
const resolver = require('./resolver')
const router = module.exports = require('koa-router')()

router.prefix('/log')

append(router, resolver, {

    // 普通统计日志
    post_abnormal(ctx) {
        return ctx.request.body
    }
})
