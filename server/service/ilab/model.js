const { account } = require('./conf')

class LabModel {

    constructor(lab, user) {
        this.username = user.un
        this.title = lab.title
        this.status = lab.status
        this.score = lab.score
        this.startTime = lab.startTime
        this.endTime = lab.endTime
        this.timeUsed = Math.floor((lab.endTime - lab.startTime)/1000)
        this.appid = account.appid
        this.originId = lab.sid
        this.steps = JSON.parse(lab.report)
    }

    static init() {
        return new LabModel(...arguments)
    }
}

module.exports = LabModel
