<template>
<div class="login-wrapper">
    <div class="login">
        <div class="cover"></div>
        <div class="form" v-if="status == 0">
            <div class="label">登录</div>
            <div class="form-item">
                <input class="input" v-model="login.username" type="text" placeholder="用户名">
            </div>
            <div class="form-item">
                <input class="input" v-model="login.password" type="text" placeholder="密码" autocomplete>
            </div>
            <div class="form-item">
                <div class="tips">{{loginMessage.message}}</div>
            </div>
            <div class="btn-group">
                <button class="btn" @click="loginSubmit(login, loginMessage)">立即登录</button>
            </div>
            <div class="link">
                <router-link to="/register">注册</router-link>
            </div>
        </div>
        <div class="form" v-if="status == 1">
            <div class="label">注册</div>
            <div class="form-item">
                <input class="input" v-model="register.username" type="text" placeholder="用户名">
            </div>
            <div class="form-item">
                <input class="input" v-model="register.password" type="password" placeholder="请输入密码" autocomplete>
            </div>
            <div class="form-item">
                <input class="input" v-model="register.repeatPassword" type="password" placeholder="请确认密码" autocomplete>
            </div>
            <div class="form-item">
                <input class="input" v-model="register.stuid" type="text" placeholder="请输入学号">
            </div>
            <div class="form-item">
                <input class="input" v-model="register.name" type="text" placeholder="请输入姓名">
            </div>
            <div class="form-item">
                <div class="tips">{{registerMessage.message}}</div>
            </div>
            <div class="btn-group">
                <button class="btn" @click="registerSubmit(register, registerMessage)">立即注册</button>
            </div>
            <div class="link">
                <router-link to="/login">登录</router-link>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { ref, defineComponent, reactive, watch, watchEffect } from 'vue'

export default defineComponent({

    props: {
        status: {
            type: Number,
            default: 0
        },
        loginSubmit: {
            type: Function,
            required: true,
        },
        registerSubmit: {
            type: Function,
            required: true,
        },
        loginMessage: String,
        registerMessage: String,
    },

    setup() {
        const loginData: LoginData = {
            username: '',
            password: ''
        }
        const registerData: RegisterData = {
            name: '',
            stuid: '',
            username: '',
            password: '',
            repeatPassword: '',
        }

        const loginMessage: Message = { message: '' }
        const registerMessage: Message = { message: '' }

        return {
            login: reactive(loginData),
            register: reactive(registerData),
            loginMessage: reactive(loginMessage),
            registerMessage: reactive(registerMessage),
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
