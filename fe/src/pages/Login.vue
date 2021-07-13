<template>
<LoginRegister
    ref="loginRegister"
    :status="status"
    :afterLogin="gotoLab"
    :afterRegister="gotoLab"
/>
</template>
<script lang="ts">
import { baseURL } from '@/config/host'
import { defineComponent } from 'vue'
import LoginRegister from '@/components/LoginRegister.vue'

export default defineComponent({

    components: { LoginRegister },

    created() {
        this.ticketLogin()
    },

    methods: {
        gotoLab() {
            location.href = `${baseURL}/lab.html`
        },

        ticketLogin() {
            if (this.$route.query.ticket) {
                this.gotoLab()
            }
        },
    },

    computed: {
        status() {
            return this.$route.meta.status
        }
    }
})
</script>
