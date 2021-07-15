const asp = require('@4a/asp')
const assert = require('@4a/assert')
const Resolver = require('~/class/resolver')
const User = require('../controller/user')
const Lab = require('../controller/lab')
const lab = require('~/service/ilab')
const LabModel = require('~/service/ilab/model')

class LabResolver extends Resolver {

    async create(ctx) {
        const params = ctx.request.body

        asp.debug('lab:', params)

        timeValidator(params)

        const data = await Lab.create({
            uid: ctx.state.user.id,
            title: params.title,
            score: params.score,
            status: params.status,
            startTime: params.startTime,
            endTime: params.endTime,
            report: JSON.stringify(params.steps)
        })

        const user = await User.findOne({ id: ctx.state.user.id })

        // 创建实验数据
        const labData = LabModel.init(data, user)

        asp.debug('labData:', labData)

        const iToken = ILABTOEKN[user.id]

        iToken ?
            asp.info('lab.dataUpload token:', iToken):
            asp.error('lab.dataUpload token Error:', iToken)

        // 检查token
        assert.ok(iToken, 403301, 'loss iLab token')

        // 上传到iLab平台
        const result = await lab.dataUpload(iToken, labData)

        asp.warn('ilabUploadResult:', result)

        // 校验上传结果
        assert.ok(result.code === 0, 403300, 'iLab上传失败: ' + JSON.stringify(result))

        return data
    }
}

module.exports = new LabResolver



// 实验时间戳合法性校验
function timeValidator(lab) {
    const result = []

    console.group('实验数据时间戳校验开始:-------------------------------------')

    const r0 = lab.steps[0].startTime > lab.startTime

    r0 ?
        asp.debug('step0.startTime > lab.startTime:', r0):
        asp.error('step0.startTime > lab.startTime:', r0)

    result.push(r0)

    lab.steps.forEach((step, index) => {

        const rn = step.endTime > step.startTime

        rn ?
            asp.debug(`step${index}.endTime > step${index}.startTime:`, rn) :
            asp.error(`step${index}.endTime > step${index}.startTime:`, rn)


        result.push(rn)

        if (index != 0) {
            const r1 = step.startTime > lab.steps[index - 1].endTime

            r1 ?
                asp.debug(`step${index}.startTime > step${index-1}.endTime:`, r1) :
                asp.error(`step${index}.startTime > step${index-1}.endTime:`, r1)

            result.push(r1)
        }
    })

    const rl = lab.endTime > lab.steps[lab.steps.length - 1].endTime
    rl ?
        asp.debug(`lab.endTime > step${lab.steps.length - 1}.endTime:`, rl) :
        asp.error(`lab.endTime > step${lab.steps.length - 1}.endTime:`, rl)
    result.push(rl)

    const ro = Date.now() > lab.endTime
    ro ?
        asp.debug(`Date.now() > lab.endTime:`, Date.now() > lab.endTime, Date.now(), lab.endTime):
        asp.error(`Date.now() > lab.endTime:`, Date.now() > lab.endTime, Date.now(), lab.endTime)
    result.push(ro)

    asp.debug('lab time valid result:', result)

    console.groupEnd()
    asp.info('实验数据时间戳校验结束-------------------------------------')
}
