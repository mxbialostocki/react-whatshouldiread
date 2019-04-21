const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

import React from 'react'

module.exports = {
  retrieveAllTitles,
  retrieveAllTitlesWithReviews,
  retrieveRandomTitle
}

// function to render all existing books
function retrieveAllTitles ( db = connection) {
  return db('books')
  .select()
}

// function to render all existing books with reviews
function retrieveAllTitlesWithReviews (db = connection) {
  return db('books')
  .join('reviews', 'books.isbn', 'reviews.review_isbn')
  .select('books.isbn', 'books.title', 'books.author_first', 'books.author_last', 'books.jacket_image_path', 'books.publisher', 'books.publication year', 'books.determination')
}

// function to render random individual title
function retrieveRandomTitle (db = connection) {
  return db('books')
  .select()
}

// function to render multiple jacket images and no other information

// function to render multiple reviews by list (make continuous scroll auto-load five at a time)

// function to render random individual title based on preferences
