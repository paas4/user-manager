import store from 'store2'
import http from '@/base/http'

function timeOffset(day: number = 1) {
    return (Date.now() + 1000 * 60 * 60 * 24 * day).toString()
}

class Auth {
    login(user: Auth.Login) {
        return http.login(user).then((res: Response) => {
            if (res.code === 0) {
                store.set('uid', res.data.uid)
                store.set('token', res.data.token)
                store.set('tokenExpiredTime', timeOffset(20))
            }
            return res
        })
    }

    register(user: Auth.Register) {
        return http.register(user).then((res: Response) => {
            if (res.code === 0) {
                store.set('uid', res.data.uid)
                store.set('token', res.data.token)
                store.set('tokenExpiredTime', timeOffset(20))
            }
            return res
        })
    }

    remoteLogin(ticket: string) {
        return http.remoteLogin({ ticket }).then((res: Response) => {
            if (res.code === 0) {
                store.set('un', res.data.un)
                store.set('uid', res.data.uid)
                store.set('token', res.data.token)
                store.set('tokenExpiredTime', timeOffset(20))
            }
            return res
        })
    }

    // 检查是否已登录
    isLogin() {
        const token = store.get('token')
        const tokenExpiredTime = store.get('tokenExpiredTime')

        if (
            !token || // 没有Token
            !tokenExpiredTime || // 没有有效时间，Token视为无效
            !Number(tokenExpiredTime) || // 时间戳异常，Token视为无效
            Date.now() > Number(tokenExpiredTime) // Token已过期
        ) {
            this.logout()
            return false
        }
        return true
    }

    logout() {
        store.remove('token')
        store.remove('refresh_token')
        store.remove('tokenExpiredTime')
    }
}

export default new Auth()
