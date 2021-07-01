const AppEnv = require('../common/appEnv')

const port = {
    dev: 3000,
    production: 9000,
    default: 3000,
}

const server = {
    dev: 'http://127.0.0.1:3000',
    production: 'http://127.0.0.1:9000',
}

module.exports = {
    port: port[AppEnv.nodeEnv] || port.default,
    server: server[AppEnv.nodeEnv]
}
