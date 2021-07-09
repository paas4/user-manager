const data = require('./data')
const timestamp = require('./timestamp')
const { dateFormat } = require('../../../lib')
const { account } = require('../conf')

function getData() {
    const timestamps = timestamp.init()

    // console.log(timestamps)

    data.appid = account.appid

    data.startTime = timestamps[0].startTime
    data.endTime = timestamps[timestamps.length-1].endTime
    data.timeUsed = Math.round((data.endTime - data.startTime) / 1000)

    // console.log('data.startTime:', data.startTime, dateFormat(data.startTime))
    // console.log('data.endTime:', data.endTime, dateFormat(data.endTime))
    // console.log('data.timeUsed:', data.timeUsed)

    data.score = 0

    data.steps.map((item, i) => {
        item.startTime = timestamps[i].startTime
        item.endTime = timestamps[i].endTime
        item.timeUsed = timestamps[i].timeUsed

        // console.log()
        // console.log(`step${i+1}.startTime:`, item.startTime, dateFormat(item.startTime))
        // console.log(`step${i + 1}.endTime:`, item.endTime, dateFormat(item.endTime))
        // console.log(`step${i + 1}.timeUsed:`, item.timeUsed)


        item.expectTime = item.timeUsed + 60

        data.score += item.score
    })

    // console.log('data', data)

    return data
}

module.exports = getData

