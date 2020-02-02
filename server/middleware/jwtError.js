// 解决JWT过期问题
module.exports = () => {
    return (ctx, next) => {
        return next().catch((err) => {
            if (401 !== err.status) {
                throw err
            }
            if (err.message === 'jwt expired') {
                ctx.status = 200
                ctx.body = {
                    code: 401401,
                    message: err.message
                }
            }
            else {
                ctx.status = 200
                ctx.body = {
                    code: 401402,
                    message: 'Authentication Error'
                }
            }
        })
    }
}
