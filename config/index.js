const AppEnv = require('../common/appEnv')

const port = {
    dev: 3000,
    production: 9000,
    default: 3000,
}

module.exports = {
    port: port[AppEnv.nodeEnv] || port.default
}
