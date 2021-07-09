const lab = require('./api')
const getData = require('./lib/getData')
const getTicket = require('./lib/getTicket')
const appEnv = require('../../common/appEnv')

console.log('ENV:', appEnv.nodeEnv)

const ticket = getTicket()

getData()

lab.getToken(ticket)
    .then(res => {
        console.log('baseURL', res.config.baseURL)
        console.log('GetToken:------', res.data)

        if (res.data.code === 0) {
            sendData(res.data)
                .then(res => {
                    console.log('PostData:------', res.data)
                })

        }
    })
    .catch(err => {
        console.log(err)
    })

async function sendData(user) {
    const data = getData()
    data.username = user.un
    return lab.dataUpload(user.access_token, getData())
}
