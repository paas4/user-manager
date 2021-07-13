//
// 接口定义
//


// 通用消息
declare interface Message {
    message: string | null
}

// 通用接口响应
declare interface Response {
    code: number,
    message: string,
    responseId?: string,
    data?: any
}

// 鉴权相关
declare namespace Auth {

    // 登录信息
    export interface Login {
        username: string | null
        password: string | null
    }

    // 注册信息
    export interface Register {
        name: string | null
        stuid: string | null
        username: string | null
        password: string | null
        repeatPassword: string | null
    }
}
