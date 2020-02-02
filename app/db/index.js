const ops = require('~/config/app/db')
const mysql = require('./mysql')
const redis = require('./redis')

module.exports = {
    mysql: mysql(ops.mysql),
    redis: redis(ops.redis),
}
