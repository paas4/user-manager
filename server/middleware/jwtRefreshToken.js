// 刷新Token
module.exports = () => {
    return async (ctx, next) => {
        if (ctx.state.user && ctx.state.user.grant_type === 'refresh') {
            ctx.state.user = {}
            return ctx.body = {
                code: 401403,
                message: 'Authentication Error'
            }
        }
        await next()
    }
}
