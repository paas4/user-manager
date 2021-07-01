const factory = require('./factory')

function fullURI(uri) {
    return uri === 'ROOT' ? ('/') : ('/' + uri)
}

function role(permission) {
    return require(`~/middleware/permissions/${permission || 'normal'}`)
}

function decipher(key) {
    const arr = key.split('_')
    const map = {
        dot: arr[0],
        uri: fullURI(arr[1]),
    }

    if (!arr[2]) {
        map.method = arr[1]
        map.permission = 'normal'
        return map
    }

    if (arr[2] === 'admin') {
        map.method = arr[1]
        map.permission = arr[2]
        return map
    }

    map.method = arr[2]
    map.permission = arr[3]
    return map
}

module.exports = (router, resolver, map) => {
    Object.keys(map).forEach(key => {
        const params = map[key]
        const { dot, uri, method, permission } = decipher(key)
        const permissioner = role(permission)
        router[dot](uri, permissioner(), factory((ctx, next) => {
            return resolver[method](params(ctx, next), next)
        }))
    })
}
