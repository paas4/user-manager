import store from 'store2'
import Http from '@gavinning/http'
import api from '@/config/api'
import { baseURL } from '@/config/host'

export default new Http({
    api, // 可选
    token: () => store.get('token'), // 可选
    baseURL, // 可选
    // 中间处理层
    // 可将所有公共处理、异常处理放在这里处理
    // 例如普通请求上报，异常上报，异常提醒等等
    // @err 错误，没有则为null
    // @options 请求参数
    // @http 当前http实例
    async resolver(err, response, options, http) {
        if (err) {
            console.log('系统异常[id]:' + err.message)
        }
        if (response.data && response.data.code !== 0) {
            console.log('请求异常[id]:' + response.data.message)
        }
        return response.data
    }
})
