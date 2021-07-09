
class Timestamp {


    init() {
        this.arr = []
        this.pure = []
        this.time = Date.now()// - 1000 * 60 * 30

        return this.create().filter().flash()
    }

    random() {
        return Math.floor(Math.random() * 1000 * 50 * 7)
    }

    create() {
        for(let i = 0; i < 20; i++) {
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
