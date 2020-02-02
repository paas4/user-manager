// 验证login权限
const gd = require('~/lib/ghostdebug')

function reject(ctx) {
    ctx.body = {
        code: 401410,
        message: 'Permission denied'
    }
}

module.exports = () => {
    return async (ctx, next) => {
        if (!ctx.state) {
            gd.warn('Permission check: jwt error, not found ctx.state')
            return reject(ctx)
        }
        if (!ctx.state.user) {
            gd.warn('Permission check: jwt error, not found ctx.state.user')
            return reject(ctx)
        }
        if (!ctx.state.user.uid) {
            gd.warn('Permission check: jwt error, not found ctx.state.user.uid')
            return reject(ctx)
        }
        await next()
    }
}
