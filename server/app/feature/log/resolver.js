const jsonFormat = require('json-format')
const asp = require('@4a/asp')
const Resolver = require('~/class/resolver')

class LogResolver extends Resolver {

    abnormal(ops) {
        asp.error('From Abnormal:', jsonFormat(ops, { type: 'space', size: 2 }))
        return
    }
}

module.exports = new LogResolver
