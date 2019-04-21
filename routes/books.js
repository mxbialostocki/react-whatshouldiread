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

module.exports = router