//
// 接口定义
//


// 登录信息
declare interface LoginData {
    username: string
    password: string
}

// 注册信息
declare interface RegisterData {
    name: string
    stuid: string
    username: string
    password: string
    repeatPassword: string
}

declare interface Message {
    message: string
}
