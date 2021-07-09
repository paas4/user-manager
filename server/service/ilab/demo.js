const lab = require('./api')
const getData = require('./lib/getData')
const getTicket = require('./lib/getTicket')
const appEnv = require('../../common/appEnv')

console.log('ENV:', appEnv.nodeEnv)

const ticket = getTicket()

const user = appEnv.get({
    dev: {
        appid: '100400',
        username: 'mj_121281',
        // 2021-07-09 15:10:37c
        // 2021-07-10 15:10:37e
        token: 'HbqjJONzpVDWuzg18AOzSxaGUfATT0TZCvIoz6ufCJAY32uMycEMs2m/+HwcCWycIzEKKvamNtDsAMDwWdAf5pHNl+r60kaWwkYP7vc25AY='
    },
    production: {
        appid: '104395',
        username: 'mj_2655440',
        token: 'Q4jmKtmnZRw3tKOFId4F5cnN1hqXUTL2wZAtFMp4vUlgGXEagBAPhe27vYo7bx0HQzeT5Isirn5wylX2Xqwp1/ePMCSTdyldBajS8krpnJs='
    }
})

async function getToken() {
    return lab.getToken(ticket)
        .then(res => {
            console.log('baseURL', res.config.baseURL)
            console.log('GetToken:------', res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

async function sendData() {
    const data = getData()

    console.log(user)

    data.appid = user.appid
    data.username = user.username

    return lab.dataUpload(user.token, data)
        .then(res => {
            console.log('PostData:------', res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

// sendData()
