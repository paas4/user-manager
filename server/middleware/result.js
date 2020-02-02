const AppEnv = require('../common/appEnv')
const gd = require('../lib/ghostdebug')

module.exports = () => {
    return async (ctx, next) => {

        ctx.send = (code, message, data, ...args) => {
            ctx.body = {
                code,
                message,
                data,
                responseId: ctx.req.requestId
            }
        }

        ctx.ok = (data, ...args) => {
            ctx.send(0, 'ok', data)
        }

        ctx.fail = (code, message) => {
            ctx.send(code, message)
        }

        ctx.try = async (callback) => {
            try {
                ctx.send(0, 'ok', await callback(ctx))
            } catch (err) {
                gd.error('req.requestId:', ctx.req.requestId, ctx.req.url)
                gd.error('req.query:', ctx.query)
                gd.error('req.body:', ctx.request.body)
                gd.error(err)

                const context = err.context
                const result = {
                    code: isNaN(err.code) ? -1 : err.code,
                    message: err.message,
                    responseId: ctx.req.requestId,
                }

                AppEnv.isProd ||
                    Object.assign(result, {
                        stack: err.desc || err.stack,
                        context
                    })
                ctx.body = result
            }
        }

        await next()
    }
}
