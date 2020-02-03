const api = {

    login(data) {
        return {
            url: '/login',
            data,
            method: 'POST',
        }
    },

    register(data) {
        return {
            url: '/register',
            data,
            method: 'POST',
        }
    }
}

export default api
