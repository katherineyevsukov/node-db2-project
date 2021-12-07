// DO YOUR MAGIC
const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send('da router')
})

module.exports = router
