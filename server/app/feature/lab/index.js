const append = require('~/common/router/append')
const resolver = require('./resolver')
const router = module.exports = require('koa-router')()

router.prefix('/labs')

append(router, resolver, {

    post_ROOT_create(ctx) {
        return ctx
    }
})
