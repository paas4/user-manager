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
    }
}

export default api
