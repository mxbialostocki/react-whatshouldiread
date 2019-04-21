const path = require('path')
const express = require('express')
const request = require('superagent')

const books = require('../routes/books')
const covers = require('../routes/covers')

const server = express()

server.use(express.static(path.join(__dirname, './public')))
server.use(express.json())

server.use('.v1/books', books)
server.use('.v1/covers', covers)
server.use('.v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../server/public/index.html'))
})

module.exports = server
