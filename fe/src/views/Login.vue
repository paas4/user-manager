<template>
<login-register
    ref="loginRegister"
    :status="status"
    :loginSubmit="loginSubmit"
    :registerSubmit="registerSubmit"
/>
</template>
<script>
import auth from '@/base/auth'
import LoginRegister from '../components/LoginRegister'

export default {
    components: { LoginRegister },

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
                    alert(res.message)
                })
                .catch(err => {
                    console.log(err)
                    alert(err.message)
                })
        },

        registerSubmit() {
            auth.register(this.$refs.loginRegister.register)
                .then(res => {
                    if (res.code === 0) {
                        return this.gotoUser()
                    }
                    alert(res.message)
                })
                .catch(err => {
                    console.log(err)
                    alert(err.message)
                })
        },

        gotoUser() {
            this.$router.push('/user')
        }
    },

    computed: {
        status() {
            return this.$route.meta.status
        }
    }
}
</script>
