class Controller {
    constructor() {}

    static create() {
        return new this(...arguments)
    }
}

module.exports = Controller
