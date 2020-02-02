const appRootDir = require('app-root-dir')
const bestRequire = require('best-require')

bestRequire(appRootDir.get(), {
    db: '~/app/db',
    controller: '~/app/feature/controller'
})
