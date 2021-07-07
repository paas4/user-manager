const AppEnv = require('../common/appEnv')

const port = {
    dev: 9002,
    production: 9002,
}

const server = {
    dev: 'http://127.0.0.1:9002',
    production: 'http://127.0.0.1:9002',
}

module.exports = {
    port: port[AppEnv.nodeEnv] || port.dev,
    server: server[AppEnv.nodeEnv]
}
