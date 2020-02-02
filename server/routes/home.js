const router = require('koa-router')()
const home = require('../controller/home')

router.get('/', home.root)
router.get('/string', home.string)
router.get('/json', home.json)
router.get('/login', home.login)
router.post('/login', home.loginPost)

module.exports = router
