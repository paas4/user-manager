const shortid = require('shortid')

module.exports = () => {
    return async (ctx, next) => {
        ctx.req.requestId = ctx.req.headers.requestId || shortid.generate()
        ctx.res.responseId = ctx.req.requestId
        await next()
    }
}
