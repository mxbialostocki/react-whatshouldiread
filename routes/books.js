const express = require('express')
const db = require('../db')
const router  = express.Router()

router.get('/', (req, res) => {
  db.retrieveAllTitles()
  .then(allTitles => {
    const titles = JSON.parse(allTitles)
    return titles
  })
  res.JSON(titles)
})

router.get('/alllist', (req, res) => {
  res.send('got some good titles here')
})

module.exports = router