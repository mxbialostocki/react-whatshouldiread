const express = require('express')
const db = require('../db')
const router  = express.Router()

router.get('/allcovers', (req, res) => {
  res.send('you made the covers page render')
})

module.exports = router