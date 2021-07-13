import auth from '@/base/auth'
import { ok } from '@4a/assert'

export async function login(user: Auth.Login) {
    ok(user.username, 10010, '请输入用户名')
    ok(user.password, 10011, '请输入密码')
    return auth.login(user).then((res: Response) => {
        if (res.code === 0) {
            return res.data
        }
        throw new Error(res.message)
    })
}

export async function register(user: Auth.Register) {
    ok(user.username, 10020, '请输入用户名')
    ok(user.password, 10021, '请输入密码')
    ok(user.repeatPassword, 10022, '两次密码输入不一致')
    ok(user.stuid, 10023, '请输入学号')
    ok(user.name, 10024, '请输入姓名')
    return auth.register(user).then((res: Response) => {
        if (res.code === 0) {
            return res.data
        }
        throw new Error(res.message)
    })
}

export default {
    login,
    register,
}
