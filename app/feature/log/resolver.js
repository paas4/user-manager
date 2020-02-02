const jsonFormat = require('json-format')
const gd = require('~/lib/ghostdebug')
const Resolver = require('~/class/resolver')

class LogResolver extends Resolver {

    abnormal(ops) {
        gd.error('From Abnormal:', jsonFormat(ops, { type: 'space', size: 2 }))
        return
    }
}

module.exports = new LogResolver
