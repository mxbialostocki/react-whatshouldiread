const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.retrieveAllTitles()
    .then(bookData => res.send(bookData))
})

module.exports = router
