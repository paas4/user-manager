const Moment = require('moment')
const MomentRange = require('moment-range')
const moment = MomentRange.extendMoment(Moment)

function offsetDay(count) {
    const range = moment.rangeFromInterval('day', count, moment())
    return range.start.format('YYYY-MM-DD')
}

module.exports = {
    offsetDay
}
