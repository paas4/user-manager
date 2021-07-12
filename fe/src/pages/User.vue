<template>
<div class="user">
    <div class="success">登录成功</div>
    <button class="logout" @click="logout">退出登录</button>
</div>
</template>

<script>
import store from 'store2'
import auth from '@/base/auth'

export default {
    name: 'user',

    created() {
        if (!auth.isLogin()) {
            this.$router.replace('/login')
        }
    },

    methods: {
        logout() {
            auth.logout()
            this.$router.push('/')
        }
    }
}
</script>
<style lang="stylus">
.success
    padding 20px

.logout
    margin-top 20px
</style>
