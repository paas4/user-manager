<template>
<LoginRegister
    ref="loginRegister"
    :status="status"
    :loginSubmit="login"
    :registerSubmit="register"
    :loginMessage="loginMessage"
    :registerMessage="registerMessage"
/>
</template>
<script lang="ts">
import { baseURL } from '@/config/host'
import { ref, defineComponent } from 'vue'
import LoginRegister from '@/components/LoginRegister.vue'

import { login, register } from '@/common/auth'

export default defineComponent({

    components: { LoginRegister },

    setup() {
        const loginMessage = ref(null)
        const registerMessage = ref(null)

        return {
            loginMessage,
            registerMessage,
        }
    },

    created() {
        // if (auth.isLogin()) {
        //     this.$router.replace('/user')
        // }

        this.ticketLogin()
    },

    methods: {

        login,
        register,

        ticketLogin() {
            if (this.$route.query.ticket) {
                this.gotoUser()
            }
        },

        gotoUser() {
            location.href = `${baseURL}/lab.html`
        }
    },

    computed: {
        status() {
            return this.$route.meta.status
        }
    }
})
</script>
