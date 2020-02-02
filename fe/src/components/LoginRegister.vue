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
                <input class="input" v-model="login.password" type="password" placeholder="密码">
            </div>
            <div class="btn-group">
                <button class="btn" @click="loginSubmit">立即登录</button>
            </div>
        </div>
        <div class="form" v-if="status == 1">
            <div class="label">注册</div>
            <div class="form-item">
                <input class="input" v-model="register.username" type="text" placeholder="用户名">
            </div>
            <div class="form-item">
                <input class="input" v-model="register.password" type="password" placeholder="密码">
            </div>
            <div class="form-item">
                <input class="input" v-model="register.email" type="text" placeholder="email">
            </div>
            <div class="btn-group">
                <button class="btn" @click="registerSubmit">立即注册</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: {
        status: {
            type: Number,
            default: 0
        },
        loginSubmit: {
            type: Function,
            default: () => {}
        },
        registerSubmit: {
            type: Function,
            default: () => {}
        },
    },

    data() {
        return {
            login: {
                username: null,
                password: null,
            },
            register: {
                username: null,
                password: null,
                email: null,
            }
        }
    }
}
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
    background: white url(../assets/cover.jpg) no-repeat;
    background-position: center;
    background-size: 80% auto;
}

.form {
    flex: 1;
    padding-top: 120px;
    background: #284B9F;
}

.form-item {
    margin-bottom: 12px;
}

.label {
    color: white;
    padding: 16px 0;
}

.btn,
.input {
    width: 180px;
    padding: 8px 12px;
    border-radius: 2px;
    border: none;
    outline: none;
}

.btn {
    color: white;
    cursor: pointer;
    font-size: 13px;
    box-sizing: content-box;
    background: #2f59bf;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.13);
}

.btn:hover,
.btn:active {
    background: #396eef;
}

.btn-group {
    padding: 20px 0
}
</style>
