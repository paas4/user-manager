import store from 'store2'
import http from '@/base/http'

class Auth {
    login(user: LoginData) {
        return http.login(user).then((res: any) => {
            if (res.code === 0) {
                store.set('uid', res.data.uid)
                store.set('token', res.data.token)
                store.set('refresh_token', res.data.refresh_token)
            }
            return res
        })
    }

    register(user: RegisterData) {
        return http.register(user).then((res: any) => {
            if (res.code === 0) {
                store.set('uid', res.data.uid)
                store.set('token', res.data.token)
                store.set('refresh_token', res.data.refresh_token)
            }
            return res
        })
    }

    isLogin() {
        return !!store.has('token')
    }

    logout() {
        store.remove('uid')
        store.remove('token')
        store.remove('refresh_token')
    }
}

export default new Auth()
