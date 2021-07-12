import appEnv from '@/base/env'

console.log(`env: ${appEnv.env}`)

// Server
export const baseURL = appEnv.get({
    dev: 'http://192.168.1.100:9002',
    production: 'http://202.114.183.193:9002',
})
