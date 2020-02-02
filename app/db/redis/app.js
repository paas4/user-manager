/**
 *
 * @desc Redis封装
 * @date 2019-01-25
 * @author gavinning gavinning@qq.com
 *
 * @history
 *    created at 2019-01-25 by gavinning
 *
 */

const redis = require(':db').redis

class RedisApp {
    constructor({ key, timeout }) {
        this.key = key
        this.redis = redis
        this.timeout = timeout
    }

    async get() {
        const data = await redis.get(this.key)
        try {
            return JSON.parse(data)
        } catch (err) {
            return data
        }
    }

    set(value, time) {
        value = 'object' === typeof value ? JSON.stringify(value) : value.toString()
        return time ? redis.set(this.key, value, 'EX', time) : redis.set(this.key, value)
    }

    save(value, time) {
        return this.set(value, time || this.timeout)
    }

    clear() {
        return redis.del(this.key)
    }

    expire(time) {
        return time ? redis.expire(this.key, time) : null
    }

    // 添加一条数据
    async push(data) {
        const docs = (await this.get()) || []
        if (Array.isArray(docs)) {
            docs.push(data)
            await this.save(docs, this.timeout)
        }
    }

    static getKey() {
        return Array.from(arguments).join(':')
    }

    static init() {
        const key = this.getKey(...arguments)
        return new this({ key })
    }
}

module.exports = RedisApp
