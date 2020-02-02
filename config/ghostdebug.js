const AppEnv = require('../common/appEnv')

const format = {
    min: 'MMDD HH:mm:ss',
    base: 'YYYY-MM-DD HH:mm:ss',
    full: 'YYYY-MM-DD HH:mm:ss.SSS.ZZ'
}

const formater = (format) => {
    return { format }
}

const date = {
    min: formater(format.min),
    base: formater(format.base),
    full: formater(format.full),
}

const logPath = {
    dev: '/tmp',
    test: '/tmp',
    preview: '/data/logs/tank-pre',
    production: '/data/logs/tank',
}

module.exports = {
    date,
    logPath: logPath[AppEnv.nodeEnv]
}
