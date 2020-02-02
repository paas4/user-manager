const append = require('~/common/router/append')
const resolver = require('./resolver')
const router = module.exports = require('koa-router')()

router.prefix('/user')

// 邀请查询二维码
// 订单分账关系绑定
router.get('/qrcode/query', async (ctx) => {
    ctx.type = 'image/png'
    ctx.body = await resolver.getQueryQrcode({
        uid: ctx.query.uid,
        refresh: !!ctx.query.refresh
    })
})

// 邀请下级代理
// 多级代理关系绑定
router.get('/qrcode/proxyer', async (ctx) => {
    ctx.type = 'image/png'
    ctx.body = await resolver.getProxyerQrcode({
        uid: ctx.query.uid,
        refresh: !!ctx.query.refresh
    })
})

append(router, resolver, {

    // 基础 查询用户信息
    get_ROOT_getUser(ctx) {
        return ctx.state.user.uid
    },

    // 注销实名认证
    post_unbindingTruth(ctx) {
        return ctx.state.user.uid
    },

    // 代理实名认证
    post_realme_postRealme(ctx) {
        return {
            uid: ctx.state.user.uid,
            pid: ctx.request.body.pid,
            tel: ctx.request.body.tel,
            realname: ctx.request.body.realname,
            wechatid: ctx.request.body.wechatid,
            alipayid: ctx.request.body.alipayid,
        }
    },

    // 查询余额
    get_balance_getBalance(ctx) {
        return ctx.state.user.uid
    },

    get_bills_getBills(ctx) {
        return ctx.state.user.uid
    }
})
