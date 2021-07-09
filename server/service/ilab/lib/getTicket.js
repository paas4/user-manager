const fs = require('fs')
const path = require('path')
const qs = require('querystring')

const data = fs.readFileSync(path.join(__dirname, 'ticket.txt'), 'utf8')


function getTicket() {
    const query = qs.parse(data.trim().split('?')[1])
    console.log('ticket:', query.ticket)
    return query.ticket
}

module.exports = getTicket
