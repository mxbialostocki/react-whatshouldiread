const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

// function to render all existing books
function retrieveAllTitles (db = connection) {
  return db('books')
    .leftJoin('reviews', 'books.isbn', 'reviews.review_isbn')
    .select('books.isbn', 'books.title', 'books.author_first', 'books.author_last', 'books.jacket_image_path', 'books.publisher', 'books.publication_year', 'books.determination', 'reviews.reviewer_name', 'reviews.review_head', 'reviews.review_body')
}

// function to render random individual title
function retrieveTitleById (id, db = connection) {
  return db('books')
    .leftJoin('reviews', 'books.isbn', 'reviews.review_isbn')
    .where(id, 'books.id')
    .select('books.isbn', 'books.title', 'books.author_first', 'books.author_last', 'books.jacket_image_path', 'books.publisher', 'books.publication_year', 'books.determination', 'reviews.reviewer_name', 'reviews.review_head', 'reviews.review_body')
}

// function to render multiple jacket images and no other information

// function to render multiple reviews by list (make continuous scroll auto-load five at a time)

// function to render random individual title based on preferences

module.exports = {
  retrieveAllTitles,
  retrieveTitleById
}
