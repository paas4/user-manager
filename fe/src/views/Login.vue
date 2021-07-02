<template>
<login-register
    ref="loginRegister"
    :status="status"
    :loginSubmit="loginSubmit"
    :registerSubmit="registerSubmit"
    :loginMessage="loginMessage"
    :registerMessage="registerMessage"
/>
</template>
<script>
import auth from '@/base/auth'
import LoginRegister from '../components/LoginRegister'

export default {
    components: { LoginRegister },

    data() {
        return {
            loginMessage: null,
            registerMessage: null,
        }
    },

    created() {
        // if (auth.isLogin()) {
        //     this.$router.replace('/user')
        // }
    },

    methods: {
        loginSubmit() {
            auth.login(this.$refs.loginRegister.login)
                .then(res => {
                    if (res.code === 0) {
                        return this.gotoUser()
                    }
                    this.loginMessage = res.message
                })
                .catch(err => {
                    console.log(err)
                    this.loginMessage = err.message
                })
        },

        registerSubmit() {
            const data = this.$refs.loginRegister.register

            if (!data.username) {
                return this.registerMessage = '请输入用户名'
            }

            if (!data.password) {
                return this.registerMessage = '请输入密码'
            }

            if (data.password !== data.repeatPassword) {
                return this.registerMessage = '两次密码输入不一致'
            }

            if (!data.stuid) {
                return this.registerMessage = '请输入学号'
            }

            if (!data.name) {
                return this.registerMessage = '请输入姓名'
            }

            auth.register(this.$refs.loginRegister.register)
                .then(res => {
                    if (res.code === 0) {
                        return this.gotoUser()
                    }
                    this.registerMessage = res.message
                })
                .catch(err => {
                    console.log(err)
                    this.registerMessage = err.message
                })
        },

        gotoUser() {
            // this.$router.push('/user')
            location.href = 'http://localhost/demo/'
        }
    },

    computed: {
        status() {
            return this.$route.meta.status
        }
    }
}
</script>
