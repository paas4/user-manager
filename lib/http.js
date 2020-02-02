const axios = require('axios')
const ShareError = require('./shareError')
const url = require('./url')

class Http {

    get(url, params, options = {}) {
        options.url = url
        options.params = params
        options.method = 'GET'
        return this.fetch(options)
    }

    post(url, data, options = {}) {
        options.url = url
        options.data = data
        options.method = 'POST'
        return this.fetch(options)
    }

    async fetch(options) {
        try {
            options.url = url.full(options.url)
            options.timeout = options.timeout || 5000
            return await axios(options)
        }
        catch(err) {
            throw new ShareError(500001, err, { options })
        }
    }

    async fetchData(options) {
        return (await this.fetch(options)).data
    }
}

module.exports = new Http
