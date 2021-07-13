const api = {
    login(data: any) {
        return {
            url: '/login',
            data,
            method: 'POST',
        }
    },

    register(data: any) {
        return {
            url: '/register',
            data,
            method: 'POST',
        }
    },

    // iLab登录
    remoteLogin(params: any) {
        return {
            params,
            method: 'GET',
            url: '/remoteLogin',
        }
    },
}

export default api
