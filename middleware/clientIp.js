const requestIp = require('request-ip')

module.exports = () => {
    return async (ctx, next) => {
        ctx.clientIp = requestIp.getClientIp(ctx.request)
        await next()
    }
}
