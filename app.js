const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const middlewares = require('./middleware')
const gd = require('./lib/ghostdebug')
const extension = require('./extends/app')

onerror(app)
extension(app)
middlewares(app)

app.on('error', (err, ctx) => {
    gd.error('server error', err, ctx)
})

gd.debug('app start by', process.env.NODE_ENV)

module.exports = app
