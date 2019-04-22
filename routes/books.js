const express = require('express')
const db = require('../db')
const router  = express.Router()

router.get('/', (req, res) => {
  db.retrieveAllTitles()
  .then(allTitles => {
    const titles = {
      titles: allTitles
    }
    res.json(titles)
  })
})

router.get('/alllist', (req, res) => {
  res.send('got some good titles here')
})

module.exports = router