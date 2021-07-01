const Koa = require('koa')
const app = new Koa()
const asp = require('@4a/asp')
const onerror = require('koa-onerror')
const middlewares = require('./middleware')
const extension = require('./extends/app')

onerror(app)
extension(app)
middlewares(app)

app.on('error', (err, ctx) => {
    asp.error('server error', err, ctx)
})

asp.debug('app start by', process.env.NODE_ENV)

module.exports = app
