const moment = require('moment')

class Lib {

    isEmptyObject(obj) {
        let name
        for (name in obj) {
            return false
        }
        return true
    }

    toMap(key, arr) {
        let map = {}
        arr.forEach(item => (map[item[key]] = item))
        return map
    }

    /**
     * 数字截断
     * @param {Number} num 需要截断的目标
     * @param {Number} length 截断小数点后的长度
     * @return {Number}
     */
    toFixed(num, length = 2) {
        return isNaN(num) ? num : Number(num.toFixed(length))
    }

    /**
     * 可控范围随机数
     * @param {Number} min 随机数最小值
     * @param {Number} max 随机数最大值
     * @param {Number} length 小数点长度，可选，默认为0取整
     */
    random(min, max, length = 0) {
        return toFixed(min + (max - min) * Math.random(), length)
    }

    /**
     * 明天 0:00:00 过期时间 适用于当天过期取值
     */
    getTodayExpireSecond() {
        const now = moment().format('YYYY-MM-DD HH:mm:ss')
        const end = moment()
            .add(1, 'days')
            .format('YYYY-MM-DD 00:00:00')
        const sub = new Date(end).getTime() - new Date(now).getTime()
        return sub / 1000
    }

    // 手机号混乱
    encryptTel(tel, str) {
        if (str) {
            return tel.replace(tel.slice(3, 7), str)
        }
        return tel.replace(tel.slice(7, 11), Math.random().toString().slice(3, 7))
    }

    mosaicTel(tel) {
        tel = tel.toString()
        return tel.replace(tel.slice(3, 7), '****')
    }

    mosaicPid(pid) {
        pid = pid.toString()
        return pid.replace(pid.slice(6, 14), '********')
    }

    each(obj, fn) {
        for (let key in obj) {
            fn(key, obj[key])
        }
    }

    clone(data) {
        return JSON.parse(JSON.stringify(data))
    }
}

module.exports = new Lib
