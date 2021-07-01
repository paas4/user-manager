// 验证admin权限
const asp = require('@4a/asp')
const User = require('~/app/feature/controller/user.js')

async function isNotAdmin(uid) {
    return (await User.count({ uid, is_admin: 1 })) < 1
}

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
        if (await isNotAdmin(ctx.state.user.uid)) {
            asp.error(`Permission check: uid:${ctx.state.user.uid} is not admin user`)
            return reject(ctx)
        }
        await next()
    }
}
