// normal权限 无需验证

module.exports = () => {
    return async (ctx, next) => {
        await next()
    }
}
