const Redis = require('ioredis')

module.exports = (conf) => new Redis(conf)
