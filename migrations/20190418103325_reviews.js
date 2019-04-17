
exports.up = (knex, Promise) => {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary()
    table.string('reviewer_name')
    table.string('review_head')
    table.string('review_body')
    table.integer('review_isbn').references('books.isbn')  
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('reviews')
};
