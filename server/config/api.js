// For JWT

// 白名单
// 不需要Token
const public = [
    /^\/$/,
    /^\/log/,
    /^\/check$/,
    /^\/login$/,
    /^\/register$/,
    /^\/remoteLogin$/,
    /^\/g\/refreshToken$/,
]

// 加密密匙
const secret = 'a2e0eee9-48ab-4f5e-97f2-5d075ab84111'

// Token有效期
const timeout = '30d'
const refreshTimeout = '30d'

module.exports = {
    public,
    secret,
    timeout,
    refreshTimeout
}
