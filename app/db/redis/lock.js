const redis = require('../../models/redis')

class Lock {
    constructor({ key }) {
        this.key = key
    }

    async lock(time = 300) {
        this.locked = await redis.Lock.lock(this.key, time)
        return this.locked
    }

    unlock() {
        if (!this.locked || !this.locked.unlock) {
            console.error(this.key, 'lock is expired')
            return
        }
        return this.locked.unlock()
    }

    extend(time) {
        return this.locked.extend(time)
    }

    static getKey() {
        return Array.from(arguments).join(':')
    }

    static init() {
        const key = this.getKey(...arguments)
        return new this({ key })
    }
}

module.exports = Lock
