var router = require('express').Router()

router.use('/api', require('./endpoints'))

module.exports = router