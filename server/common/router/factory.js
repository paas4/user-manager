function factory(callback) {
    return async function(ctx, next) {
        await ctx.try(() => callback(ctx, next))
    }
}

module.exports = factory
