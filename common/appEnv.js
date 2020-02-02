class AppEnv {

    static get nodeEnv() {
        return process.env.NODE_ENV || 'dev'
    }

    static get isLocal() {
        return 'local' === this.nodeEnv
    }

    static get isDev() {
        return ['dev', 'local', 'mock'].includes(this.nodeEnv)
    }

    static get isTest() {
        return 'test' === this.nodeEnv
    }

    static get isPreview() {
        return 'preview' === this.nodeEnv
    }

    static get isProduction() {
        return 'production' === this.nodeEnv
    }

    static get isOnline() {
        return this.isPreview || this.isProduction
    }

    // 用于测试
    static dev(callback) {
        this.isDev && callback()
    }

    static get(config) {
        return config[this.nodeEnv]
    }
}

module.exports = AppEnv
