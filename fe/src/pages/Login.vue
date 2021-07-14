<template>
<LoginRegister
    ref="loginRegister"
    :status="status"
    :afterLogin="gotoLab"
    :afterRegister="gotoLab"
/>
</template>
<script lang="ts">
import auth from '@/base/auth'
import { baseURL } from '@/config/host'
import { defineComponent } from 'vue'
import LoginRegister from '@/components/LoginRegister.vue'

export default defineComponent({

    components: { LoginRegister },

    created() {
        this.checkLogin()
    },

    methods: {
        gotoLab() {
            location.href = `${baseURL}/lab.html`
        },

        checkLogin() {

            // 检查是否已登录
            if (auth.isLogin()) {
                return this.gotoLab()
            }

            // 检查是否启用iLab自动登录
            if (this.$route.query.ticket) {
                return this.iLabLogin()
            }
        },

        iLabLogin() {
            auth.remoteLogin(this.$route.query.ticket as string)
                .then((res: Response) => {
                    if (res.code === 0) {
                        return this.gotoLab()
                    }
                    alert('iLab登录失败:' + res.message)
                })
                .catch((err: Error) => {
                    alert('iLab登录失败:' + err.message)
                })
        }
    },

    computed: {
        status() {
            return this.$route.meta.status
        }
    }
})
</script>
