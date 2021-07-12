import auth from '@/base/auth'
import { baseURL } from '@/config/host'

function gotoLab() {
    location.href = `${baseURL}/lab.html`
}

export const login = (user: LoginData, errMessage: Message) => {

    if (!user.username) {
        return (errMessage.message = '请输入用户名')
    }

    if (!user.password) {
        return (errMessage.message = '请输入密码')
    }

    auth.login(user)
        .then((res: any) => {
            if (res.code === 0) {
                return gotoLab()
            }
            console.log('errMessage:', res.message)
            errMessage.message = res.message
        })
        .catch((err: Error) => {
            console.log('errMessage:', err.message)
            errMessage.message = err.message
        })
}

export const register = (user: RegisterData, errMessage: Message) => {

    if (!user.username) {
        return errMessage.message = '请输入用户名'
    }

    if (!user.password) {
        return errMessage.message = '请输入密码'
    }

    if (user.password !== user.repeatPassword) {
        return errMessage.message = '两次密码输入不一致'
    }

    if (!user.stuid) {
        return errMessage.message = '请输入学号'
    }

    if (!user.name) {
        return errMessage.message = '请输入姓名'
    }

    auth.register(user)
        .then((res: any) => {
            if (res.code === 0) {
                return gotoLab()
            }
            errMessage.message = res.message
        })
        .catch((err: Error) => {
            errMessage.message = err.message
        })
}
