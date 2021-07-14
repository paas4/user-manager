<template lang="pug">
.login-wrapper
    .login
        .cover
        .form(v-if="status == 0")
            .label 登录
            .form-item
                input.input(v-model="login.username", type="text", placeholder="用户名")
            .form-item
                input.input(v-model="login.password", type="password", placeholder="密码")
            .form-item
                .tips {{loginMessage.message}}
            .btn-group
                button.btn(@click="loginSubmit") 立即登录
            .link
                router-link(to="/register") 注册
        .form(v-if="status == 1")
            .label 注册
            .form-item
                input.input(v-model="register.username", type="text", placeholder="用户名")
            .form-item
                input.input(v-model="register.password", type="password", placeholder="请输入密码")
            .form-item
                input.input(v-model="register.repeatPassword", type="password", placeholder="请确认密码")
            .form-item
                input.input(v-model="register.stuid", type="text", placeholder="请输入学号")
            .form-item
                input.input(v-model="register.name", type="text", placeholder="请输入姓名")
            .form-item
                .tips {{registerMessage.message}}
            .btn-group
                button.btn(@click="registerSubmit") 立即注册
            .link
                router-link(to="/login") 登录
</template>
<script lang="ts">
import auth from '@/common/auth'
import { Login, Register } from '@/class/auth'
import { PropType, defineComponent, reactive } from 'vue'

export default defineComponent({

    props: {
        status: {
            type: Number,
            default: 0
        },
        afterLogin: {
            type: Function as PropType<() => any>,
            default: () => {}
        },
        afterRegister: {
            type: Function as PropType<() => void>,
            default: () => {}
        },
    },

    setup() {
        const login = reactive(Login.empty())
        const register = reactive(Register.empty())
        const loginMessage: Message = reactive({ message: null })
        const registerMessage: Message = reactive({ message: null })

        return {
            login,
            register,
            loginMessage,
            registerMessage,
        }
    },

    methods: {
        loginSubmit() {
            auth.login(this.login)
                .then(this.afterLogin)
                .catch((err: Error) => {
                    this.loginMessage.message = err.message
                })
        },

        registerSubmit() {
            auth.register(this.register)
                .then(this.afterRegister)
                .catch((err: Error) => {
                    this.registerMessage.message = err.message
                })
        }
    }
})
</script>
<style scoped>
.login-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #272C35;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

.login {
    position: fixed;
    display: flex;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 860px;
    height: 600px;
    margin: auto;
    overflow: hidden;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
}

.cover {
    width: 600px;
    height: 100%;
    background: white url(../assets/bg.jpg) no-repeat;
    background-position: left center;
    background-size: cover;
}

.form {
    display: block;
    flex: 1;
    padding: 20px;
    padding-top: 120px;
    background: #284B9F;
}

.form-item {
    width: 100%;
    margin-bottom: 12px;
}

.label {
    color: white;
    padding: 16px 0;
}

.btn,
.input {
    width: 100%;
    padding: 8px 12px;
    border-radius: 2px;
    border: none;
    outline: none;
    box-sizing: border-box;
}

.btn {
    color: white;
    cursor: pointer;
    font-size: 13px;
    box-sizing: border-box;
    background: #2f59bf;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.13);
}

.btn:hover,
.btn:active {
    background: #396eef;
}

.btn-group {
    padding: 12px 0 20px
}

.link {
    text-align: right;
}

.link a {
    color: white;
    font-size: 12px;
}

.tips {
    color: red;
    text-align: right;
    font-size: 13px;
}
</style>
