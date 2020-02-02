<template>
<login-register
    ref="loginRegister"
    :status="status"
    :loginSubmit="loginSubmit"
    :registerSubmit="registerSubmit"
/>
</template>
<script>
import LoginRegister from '../components/LoginRegister'

export default {
    components: { LoginRegister },

    methods: {
        loginSubmit() {
            console.log('Login:', this.$refs.loginRegister.login)
        },

        registerSubmit() {
            console.log('Register:', this.$refs.loginRegister.register)
        }
    },

    computed: {
        status() {
            return this.$route.meta.status
        }
    }
}
</script>
