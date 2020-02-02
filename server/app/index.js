const fs = require('fs')
const path = require('path')

module.exports = fs
    .readdirSync(__dirname)
    .filter(name => fs.statSync(path.join(__dirname, name)).isDirectory())
    .map(name => require(path.join(__dirname, name)))
