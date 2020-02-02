// Koa-gateway
const admin = require('koa-gateway-admin')

module.exports = ({ debug, before }) => {
    return async (ctx, next) => {

        // await admin(ctx, next)

        ctx.send = (code, message, data, context) => {
            // 响应之前
            before && before(code, message, data, context)

            // TODO 接入统计和报警
            ctx.body = {
                code,
                message,
                data,
                context,
                responseId: ctx.requestId
            }
        }

        ctx.ok = (data) => {
            ctx.send(0, 'ok', data)
        }

        ctx.fail = (code, message, context) => {
            !debug ?
                ctx.send(code, message):
                ctx.send(code, message, null, context)
        }

        ctx.try = async (callback) => {
            try {
                ctx.ok(await callback())
            } catch (error) {
                const code = isNaN(error.code) ? -1 : error.code
                const message = error.message
                const context = { error }
                ctx.fail(code, message, context)
            }
        }

        await next()
    }
}
