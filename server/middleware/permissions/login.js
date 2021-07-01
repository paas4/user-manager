// 验证login权限
const asp = require('@4a/asp')

function reject(ctx) {
    ctx.body = {
        code: 401410,
        message: 'Permission denied'
    }
}

module.exports = () => {
    return async (ctx, next) => {
        if (!ctx.state) {
            asp.warn('Permission check: jwt error, not found ctx.state')
            return reject(ctx)
        }
        if (!ctx.state.user) {
            asp.warn('Permission check: jwt error, not found ctx.state.user')
            return reject(ctx)
        }
        if (!ctx.state.user.uid) {
            asp.warn('Permission check: jwt error, not found ctx.state.user.uid')
            return reject(ctx)
        }
        await next()
    }
}
