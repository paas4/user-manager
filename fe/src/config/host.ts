import appEnv from '@/base/env'
import domain from './domain'

console.log(`env: ${appEnv.env}`)

// Server
export const baseURL = appEnv.get({
    dev: `http://${domain.dev}:9002`,
    production: `http://${domain.production}:9002`,
})
