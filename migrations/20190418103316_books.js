
exports.up = (knex, Promise) => {
  return knex.schema.createTable('books', (table) => {
    table.integer('isbn').primary()
    table.string('title')
    table.string('author_first')
    table.string('author_last')
    table.string('jacket_image_path')
    table.string('publisher')
    table.integer('publication_year')
    table.string('determination')
  }
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('books')
};
