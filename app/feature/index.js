const fs = require('fs')
const path = require('path')
const routes = fs
    .readdirSync(__dirname)
    .filter(name => name !== 'controller')
    .filter(name => fs.statSync(path.join(__dirname, name)).isDirectory())
    .map(name => require(path.join(__dirname, name)))

module.exports = {
    routes
}
