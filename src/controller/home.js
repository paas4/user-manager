const Controller = require('../common/controller')

class Home extends Controller {
    constructor() {
        super()
    }

    async root(ctx) {
        await ctx.render('index', {
            title: 'Hello Koa 2!'
        })
    }

    string(ctx) {
        ctx.body = 'koa2 string!'
    }

    json(ctx) {
        ctx.body = {
            title: 'koa2 json'
        }
    }

    login(ctx) {
        ctx.body = {
            code: 0,
            message: 'ok'
        }
    }

    loginPost(ctx) {
        ctx.body = {
            code: 1,
            message: 'fail'
        }
    }
}

module.exports = Home.create()