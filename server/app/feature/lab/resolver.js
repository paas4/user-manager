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

        // asp.debug('lab data:', user, data)
        asp.debug('model:', labData)

        const iToken = ILABTOEKN[user.id]

        console.log('itoken', iToken)

        // 上传到iLab平台
        const result = await lab.dataUpload(iToken, labData)

        // 校验上传结果
        assert.ok(result.code === 0, 403300, 'iLab上传失败: ' + JSON.stringify(result))

        result.code === 0 ?
            asp.info('ilabUploadResult:', result):
            asp.error('ilabUploadResult:', result)

        return data
    }
}

module.exports = new LabResolver
