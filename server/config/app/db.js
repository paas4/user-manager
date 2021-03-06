const AppEnv = require('~/common/appEnv')

const mysql = {
    dev: {
        username: 'root',
        password: 'Lincoapp@2018',
        database: 'user',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: false,
        timezone: '+08:00',
    },
    test: {
        username: 'root',
        password: 'Lincoapp@2018',
        database: 'user',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: false,
        timezone: '+08:00',
    },
    preview: {},
    production: {
        username: 'lab',
        password: 'lab123456',
        database: 'lab',
        host: 'localhost',
        port: 3806,
        dialect: 'mysql',
        logging: false,
        timezone: '+08:00',
    },
}

const redis = {
    dev: {
        db: 0,
        host: '127.0.0.1',
        port: 6379,
        connect_timeout: 1000 * 10,
        retry_strategy: () => 1000,
    },
    test: {},
    preview: {},
    production: {}
}

module.exports = {
    mysql: AppEnv.get(mysql),
    redis: AppEnv.get(redis),
}
