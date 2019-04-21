const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/main', (req, res) => {
  db.retrieveAllTitles()
  .then(books => res.render('main', { books }))
  .catch(err => res.status(500).send('no!' + err.message))
  })
