const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

// function to render all existing books
function retrieveAllTitles (db = connection) {
  return db('books')
    .leftJoin('reviews', 'books.isbn', 'reviews.review_isbn')
    .select('books.isbn', 'books.title', 'books.author_first', 'books.author_last', 'books.jacket_image_path', 'books.publisher', 'books.publication_year', 'books.determination', 'reviews.reviewer_name', 'reviews.review_head', 'reviews.review_body')
}

// deleted single title function because that should happen in the existing redux store

module.exports = {
  retrieveAllTitles
  // retrieveTitleByIsbn
}
