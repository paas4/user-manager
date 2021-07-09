//
// 时间戳校验规则
//
// 老师请注意以下几点
// 1.步骤时间要在实验总体开始截止时间之间
// 2.实验第一步的结束时间和第二步的开始时间不要相等
// 3.获取ticket的时间要在实验开始时间之前
// 4.请检查开始时间、结束时间以及时长时间的单位是否正确
// 5.实验的开始结束时间不能超出当前时间

class Timestamp {


    init() {
        this.arr = []
        this.pure = []
        this.time = Date.now()// - 1000 * 60 * 30

        return this.create().filter().flash()
    }

    random() {
        return Math.floor(Math.random() * 1000 * 50 * 1)
    }

    create() {
        for(let i = 0; i < 30; i++) {
            this.time -= this.random()
            this.arr.push(this.time)
        }
        return this
    }

    filter() {
        this.pure = this.arr.reverse()
        return this
    }

    flash() {
        const arr = this.pure
        const result = []

        arr.map((item, i) => {
            if (i % 2 === 1) {
                result.push({
                    startTime: arr[i - 1],
                    endTime: arr[i],
                    timeUsed: Math.floor((item - arr[i - 1]) / 1000)
                })
            }
        })

        return result
    }
}

module.exports = new Timestamp
