const path = require('path')
const express = require('express')

const books = require('../routes/books')
const covers = require('../routes/covers')

const server = express()

server.use(express.static(path.join(__dirname, './public')))
server.use(express.json())

server.use('/v1/books', books)
server.use('/v1/covers', covers)

server.get('*', (req, res) => {
  res.redirect('/')
})

module.exports = server
