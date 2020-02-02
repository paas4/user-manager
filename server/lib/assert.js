const msg = require('../config/code')
const ShareError = require('./shareError')

class Assert {

    ok(obj, code, message) {
        this.fail(!obj, code, message || msg[code])
    }

    fail(obj, code, message) {
        if (obj) {
            throw new ShareError(code, message || msg[code])
        }
    }
}

module.exports = new Assert
