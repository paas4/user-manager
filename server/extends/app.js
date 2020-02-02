const extensions = {
    register(apps) {
        apps.map(app => {
            if (!app) {
                return
            }
            if (app.routes) {
                return app.routes.map(router => {
                    this.use(router.routes(), router.allowedMethods())
                })
            }
            if (app.router) {
                return this.use(app.router.routes(), app.router.allowedMethods())
            }
        })
    }
}

module.exports = (app) => {
    Object.assign(app, extensions)
}
