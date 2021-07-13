import store from 'store2'
import http from '@/base/http'

class Auth {
    login(user: Auth.Login) {
        return http.login(user).then((res: Response) => {
            if (res.code === 0) {
                store.set('uid', res.data.uid)
                store.set('token', res.data.token)
            }
            return res
        })
    }

    register(user: Auth.Register) {
        return http.register(user).then((res: Response) => {
            if (res.code === 0) {
                store.set('uid', res.data.uid)
                store.set('token', res.data.token)
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
