const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/review', (req, res) => {
  db.retrieveRandomTitle()
    .then(bookData => res.send(bookData))
})

router.get('/alllist', (req, res) => {
  db.retrieveAllTitles()
    .then(bookData => res.send(bookData))
})

module.exports = router
