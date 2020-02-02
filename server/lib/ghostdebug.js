const path = require('path')
const color = require('colors')
const winston = require('winston')
const jsonFormat = require('json-format')
const conf = require('../config/ghostdebug')

function formater({ level, message, timestamp }) {
    return `[${timestamp}][${level}] ${message}`
}

const prettyFormater = winston.format.printf((info) => {
    switch (info.level) {
        case 'debug': return color.cyan(formater(info))
        case 'info': return color.green(formater(info))
        case 'warn': return color.yellow(formater(info))
        case 'error': return color.red(formater(info))
        default: return color.blue(formater(info))
    }
})

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
                winston.format.timestamp(conf.date.base),
                prettyFormater
            )
        }),
        new winston.transports.File({
            filename: path.join(conf.logPath, 'winston.log'),
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(conf.date.base),
                winston.format.json()
            )
        }),
        new winston.transports.File({
            filename: path.join(conf.logPath, 'errors.log'),
            level: 'error',
            format: winston.format.combine(
                winston.format.timestamp(conf.date.base),
                winston.format.json()
            )
        })
    ]
})

class GKD {
    debug() {
        return logger.debug(GKD.format(arguments))
    }

    info() {
        return logger.info(GKD.format(arguments))
    }

    warn() {
        return logger.warn(GKD.format(arguments))
    }

    error() {
        return logger.error(GKD.format(arguments))
    }

    static format(args) {
        try {
            return [...args].map(item => {
                if (item instanceof Error) {
                    return item.message
                }
                if ('object' === typeof item) {
                    return jsonFormat(item, { type: 'space', size: 4 })
                }
                return item
            }).join(' ')
        }
        catch(err) {
            logger.error('日志格式化输出异常:', err)
            console.error('日志格式化输出异常:', err)
            return [...args]
        }
    }
}

module.exports = new GKD
