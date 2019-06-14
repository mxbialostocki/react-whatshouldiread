const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.retrieveAllTitles()
    .then(bookData => res.send(bookData))
})

// deleted single view route because this should all be happening in the redux stores

module.exports = router
