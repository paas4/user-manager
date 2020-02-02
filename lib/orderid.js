// 唯一订单号特性
// 1.唯一、2.混合规则、3.与业务解耦、4.固定长度、5.纯数字
// 唯一订单号生成规则
// 1.固定长度数字
// 2.固定长度随时数
// 2.固定长度时间戳
// 3.固定长度流水号

const dateFormat = require('date-format')

module.exports = {

    generate() {
        const num1 = 400
        const num2 = Math.random().toString().slice(2, 5)
        const num3 = dateFormat('yyMMddhhmmssSSS', new Date())
        const num4 = Math.random().toString().slice(2, 5)
        return [num1, num2, num3, num4].join('')
    }
}