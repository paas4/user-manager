const path = require('path')
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')
const logger = require('koa-logger')
const views = require('koa-views')
const static = require('koa-static')
const cors = require('koa2-cors')
const moment = require('moment')
const requestId = require('./requestid')
const result = require('./result')
const clientIp = require('./clientIp')

module.exports = (app) => {
    app.use(cors())
    app.use(bodyparser({
        enableTypes: ['json', 'form', 'text'],
        extendTypes: {
            // 支持xml
            text: ['text/xml', 'application/xml']
        }
    }))
    app.use(json())
    app.use(logger())
    app.use(static(path.dirname(__dirname) + '/public'))
    app.use(views(path.dirname(__dirname) + '/views', { extension: 'pug' }))
    app.use(requestId())
    app.use(result())
    app.use(clientIp())

    // logger
    app.use(async (ctx, next) => {
        const start = new Date()
        await next()
        const ms = new Date() - start
        console.log(`${ctx.method} ${ctx.url} [${moment().format("MMDD HH:mm:ss")}] - ${ms}ms`)
    })
}
