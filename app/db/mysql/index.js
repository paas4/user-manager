const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)

module.exports = (conf) => {
    const db = {}
    const sequelize = new Sequelize(conf.database, conf.username, conf.password, conf)
    fs.readdirSync(__dirname)
        .filter(function (file) {
            return (
                file.indexOf('.') !== 0 &&
                file !== basename &&
                file.slice(-3) === '.js' &&
                file !== 'slave.js'
            )
        })
        .forEach(function (file) {
            let model = sequelize['import'](path.join(__dirname, file))
            db[model.name] = model
            // model.sync()
        })

    Object.keys(db).forEach(function (modelName) {
        if (db[modelName].associate) {
            db[modelName].associate(db)
        }
    })

    // 关联查询示例
    // db.draw.belongsTo(db.users, { as: 'user', foreignKey: 'uid', targetKey: 'uid' })
    // db.users.belongsTo(db.balance, { as: 'balance', foreignKey: 'uid', targetKey: 'uid' })

    db.sequelize = sequelize
    db.Sequelize = Sequelize

    return db
}
