// 验证admin权限
const gd = require('~/lib/ghostdebug')
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
        if (await isNotAdmin(ctx.state.user.uid)) {
            gd.error(`Permission check: uid:${ctx.state.user.uid} is not admin user`)
            return reject(ctx)
        }
        await next()
    }
}
