import fe from '@4a/env/fe'
import AppEnv from '@4a/env'
import domain from '@/config/domain'

// 根据hostname发现env
fe.setHostname(domain)

export default new AppEnv(fe.env)
