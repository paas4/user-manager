const append = require('~/common/router/append')
const resolver = require('./resolver')
const router = module.exports = require('koa-router')()
const assert = require('~/lib/assert')

router.prefix('/documents')

append(router, resolver, {

    // 批量查询
    get_ROOT_gets(ctx) {
        return {
            page: Number(ctx.query.page) || 1,
            size: Number(ctx.query.size) || 10,
        }
    },

    // 新增
    post_ROOT_create(ctx) {
        return ctx
    },

    // 单个查询
    'get_:id_get'(ctx) {
        const id = Number(ctx.params.id) || 0
        assert.ok(id > 0, 404100, 'Not Found')
        return id
    },

    // 单个更新
    'put_:id_update'(ctx) {
        const params = ctx.request.body
        assert.ok(params.id, 403120, 'loss id')
        return params
    }
})
