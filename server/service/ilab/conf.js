const appEnv = require('../../common/appEnv')

const baseURL = appEnv.get({
    dev: 'http://202.205.145.156:8017',
    production: 'http://www.ilab-x.com'
})

const account = appEnv.get({
    dev: {
        appid: 100400,
        secret: 'SbYymvfZ8UjEmShxRAB0b1Dtaa0uGjDOOJa/f0Mbuo4='
    },
    production: {
        appid: 104395,
        secret: '3Wqeg/EAeY8AjJrWQsVtOoRXpG1GTyTx5qBEk5Zqs0A='
    }
})

console.log(123, baseURL, account)

module.exports = {
    baseURL,
    account,
}

