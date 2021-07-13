const md5 = require('md5')
const axios = require('axios')
const { baseURL, account } = require('./conf')

class Lab {

    // http://www.ilab-x.com/open/api/v2/token?ticket=TICKET&appid=APPID&signature=SIGNATURE
    async getToken(ticket) {
        return axios({
            baseURL,
            method: 'GET',
            url: '/open/api/v2/token',
            params: Lab.addSign(ticket),
        })
        .then(res => res.data)
    }

    // http://www.ilab-x.com/open/api/v2/data_upload?access_token=ACCESS_TOKEN
    async dataUpload(token, data) {
        return axios({
            baseURL,
            method: 'POST',
            url: '/open/api/v2/data_upload',
            params: { access_token: token },
            data,
        })
        .then(res => res.data)
    }

    static sign(ticket) {
        return md5(decodeURIComponent(ticket) + account.appid + account.secret).toUpperCase()
    }

    static addSign(ticket) {
        return {
            ticket: decodeURIComponent(ticket),
            appid: account.appid,
            signature: this.sign(ticket)
        }
    }
}

module.exports = new Lab
