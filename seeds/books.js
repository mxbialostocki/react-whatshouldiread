exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { isbn: 9780062110916, title: `The Diver's Clothes Lay Empty`, author_first: 'Vendela', author_last: 'Vida', jacket_image_path: 'https://i.harperapps.com/covers/9780062110916/x500.jpg', publisher: 'HarperCollins', publication_year: 2015, determination: 'novel' },
        { isbn: 9780994134509, title: `Poroporoaki`, author_first: 'Anahera', author_last: 'Gildea', jacket_image_path: 'https://www.seraphpress.co.nz/uploads/5/4/9/5/5495023/poroporoaki_front_cover_web.jpg', publisher: 'Seraph Press', publication_year: 2016, determination: 'aotearoa, poetry' },
        { isbn: 9780141984599, title: 'Priestdaddy', author_first: 'Patricia', author_last: 'Lockwood', jacket_image_path: 'https://cdn2.penguin.com.au/covers/400/9780141984599.jpg', publisher: 'Penguin Random House', publication_year: 2017, determination: 'poetry, nonfiction' },
        { isbn: 9780312429966, title: `Patrick Melrose Novels`, author_first: 'Edward', author_last: 'St Aubyn', jacket_image_path: 'https://hyperallergic.com/wp-content/uploads/2016/04/9780312429966.jpg', publisher: 'HarperCollins', publication_year: 2012, determination: 'novel' },
        { isbn: 9780374530280, title: `Collected Stories`, author_first: 'Paley', author_last: 'Grace', jacket_image_path: 'http://prodimage.images-bn.com/pimages/9780374530280_p0_v2_s1200x630.jpg', publisher: 'HarperCollins', publication_year: 1994, determination: 'stories' },
        { isbn: 9780811220026, title: `Near to the Wild Heart`, author_first: 'Clarice', author_last: 'Lispector', jacket_image_path: 'https://ndbooks.imgix.net/Near-to-the-Wild-Heart.jpg', publisher: 'New Directions', publication_year: 2012, determination: 'novel' },
        { isbn: 9780864736253, title: `Everything We Hoped For`, author_first: 'Pip', author_last: 'Adam', jacket_image_path: 'https://cdn11.bigcommerce.com/s-58zklai/images/stencil/1024x1024/products/163/1629/EWHF_Front_RGB__88461.1507847444.jpg?c=2', publisher: 'Victoria University Press', publication_year: 2010, determination: 'stories, aotearoa' },
        { isbn: 9781524761554, title: `The Pisces`, author_first: 'Melissa', author_last: 'Broder', jacket_image_path: 'https://static01.nyt.com/images/2018/12/23/books/review/23Dorfman-06/23Dorfman-06-superJumbo.jpg?quality=90&auto=webp', publisher: 'HarperCollins', publication_year: 2018, determination: 'novel' },
        { isbn: 9781566894166, title: `Last Days`, author_first: 'Brian', author_last: 'Evenson', jacket_image_path: 'https://vice-images.vice.com/images/content-images/2016/02/05/nothing-is-as-it-seems-in-the-writing-of-brian-evenson-body-image-1454699955.jpg', publisher: 'Coffee House Press', publication_year: 2016, determination: 'novel' },
        { isbn: 9781776561049, title: `Fully Clothed and So Forgetful`, author_first: 'Hannah', author_last: 'Mettner', jacket_image_path: 'https://cdn11.bigcommerce.com/s-58zklai/images/stencil/1024x1024/products/1074/1535/Fully_Clothed_and_So_Forgetful__32303.1486956777.jpg?c=2', publisher: 'Victoria University Press', publication_year: 2017, determination: 'aotearoa, poetry' }

      ])
    })
};
