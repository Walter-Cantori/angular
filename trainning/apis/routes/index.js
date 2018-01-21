const express = require('express')
const router = express.Router()
const testJson = require('./testJson')

router.use('/testjson', testJson)

router.use('/', (req, res) => {
    res.status(404).send('not found')
})



module.exports = router