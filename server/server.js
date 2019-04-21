const path = require('path')
const express = require('express')
const request = require('superagent')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
