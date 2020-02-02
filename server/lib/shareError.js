class ShareError extends Error {
    constructor(code, message, options) {
        super()

        if ('number' === typeof code) {
            this.code = code
            
            if ('string' === typeof message) {
                this.message = message
            }
            else if (message instanceof Error) {
                let err = message
                this.stack = err.stack
                this.message = err.message
            }
        }
        else if (code instanceof Error) {
            let err = code
            this.code = 500000
            this.stack = err.stack
            this.message = err.message
        }
        else if ('object' === typeof code) {
            Object.assign(this, code)
        }
        else if ('string' === typeof code) {
            this.message = code
        }
        if ('object' === typeof options) {
            Object.assign(this, options)
        }
    }
}

module.exports = ShareError
