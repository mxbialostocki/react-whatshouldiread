
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {isbn: 9780062110916, title: `The Diver's Clothes Lay Empty`, author_first: 'Vendela', author_last: 'Vida', jacket_image_path: 'https://i.harperapps.com/covers/9780062110916/x500.jpg', publisher: 'HarperCollins', publication_year: 2015, determination: 'novel'},
        {isbn: 9780994134509, title: `Poroporoaki`, author_first: 'Anahera', author_last: 'Gildea', jacket_image_path: 'https://www.seraphpress.co.nz/uploads/5/4/9/5/5495023/poroporoaki_front_cover_web.jpg', publisher: 'Seraph Press', publication_year: 2016, determination: 'aotearoa, poetry'},
        {isbn: 9780141984599, title: 'Priestdaddy', author_first: 'Patricia', author_last: 'Lockwood', jacket_image_path: 'https://cdn2.penguin.com.au/covers/400/9780141984599.jpg', publisher: 'Penguin Random House', publication_year: 2017, determination: 'poetry, nonfiction'},
        {isbn: 9780312429966, title: `Patrick Melrose Novels`, author_first: 'Edward', author_last: 'St Aubyn', jacket_image_path: 'https://i.harperapps.com/covers/9780062110916/x500.jpg', publisher: 'HarperCollins', publication_year: 2015, determination: 'novel'},
        {isbn: 9780374530280, title: `Collected Stories`, author_first: 'Paley', author_last: 'Grace', jacket_image_path: 'https://i.harperapps.com/covers/9780062110916/x500.jpg', publisher: 'HarperCollins', publication_year: 2015, determination: 'stories'},
        {isbn: 9780811220026, title: `Near to the Wild Heart`, author_first: 'Clarice', author_last: 'Lispector', jacket_image_path: 'https://i.harperapps.com/covers/9780062110916/x500.jpg', publisher: 'New Directions', publication_year: 2015, determination: 'novel'},
        {isbn: 9780864736253, title: `Everything We Hoped For`, author_first: 'Pip', author_last: 'Adam', jacket_image_path: 'https://i.harperapps.com/covers/9780062110916/x500.jpg', publisher: 'Victoria University Press', publication_year: 2015, determination: 'stories, aotearoa'},
        {isbn: 9781524761554, title: `The Pisces`, author_first: 'Melissa', author_last: 'Broder', jacket_image_path: 'https://i.harperapps.com/covers/9780062110916/x500.jpg', publisher: 'HarperCollins', publication_year: 2015, determination: 'novel'},
        {isbn: 9781566894166, title: `Last Days`, author_first: 'Brian', author_last: 'Evenson', jacket_image_path: 'https://i.harperapps.com/covers/9780062110916/x500.jpg', publisher: 'Coffee House Press', publication_year: 2015, determination: 'novel'},
        {isbn: 9781776561049, title: `Fully Clothed and So Forgetful`, author_first: 'Hannah', author_last: 'Mettner', jacket_image_path: 'https://i.harperapps.com/covers/9780062110916/x500.jpg', publisher: 'Victoria University Press', publication_year: 2015, determination: 'aotearoa, poetry'},

      ]);
    });
};
