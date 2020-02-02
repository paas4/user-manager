const AppEnv = require('~/common/appEnv')

const mysql = {
    dev: {
        username: 'root',
        password: 'Lincoapp@2018',
        database: 'user_auth_template',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: false,
        timezone: '+08:00',
    },
    test: {},
    preview: {},
    production: {},
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
