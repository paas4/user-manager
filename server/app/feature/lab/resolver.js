const asp = require('@4a/asp')
const Resolver = require('~/class/resolver')

class LabResolver extends Resolver {

    async create(ctx) {

        asp.debug('body:', ctx.request.body)

        return ctx.request.body
    }
}

module.exports = new LabResolver
