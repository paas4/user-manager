// auth

export class Login implements Auth.Login {
    username: string | null
    password: string | null

    constructor(user: Auth.Login) {
        this.username = user.username
        this.password = user.password
    }

    static init(user: Auth.Login) {
        return new Login(user)
    }

    static empty() {
        return this.init({
            username: null,
            password: null,
        })
    }
}

export class Register implements Auth.Login {
    name: string | null
    stuid: string | null
    username: string | null
    password: string | null
    repeatPassword: string | null

    constructor(user: Auth.Register) {
        this.name = user.name
        this.stuid = user.stuid
        this.username = user.username
        this.password = user.password
        this.repeatPassword = user.repeatPassword
    }

    static init(user: Auth.Register) {
        return new Register(user)
    }

    static empty() {
        return this.init({
            name: null,
            stuid: null,
            username: null,
            password: null,
            repeatPassword: null,
        })
    }
}

