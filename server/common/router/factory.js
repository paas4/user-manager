function factory(callback) {
    return async function(ctx) {
        await ctx.try(() => callback(ctx))
    }
}

module.exports = factory
