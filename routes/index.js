const home = require('./home')
const users = require('./users')

module.exports = app => {
    app.use(home.routes(), home.allowedMethods())
    app.use(users.routes(), users.allowedMethods())
}
