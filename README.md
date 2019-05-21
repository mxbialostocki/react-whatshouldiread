# react-whatshouldiread


## what is this?
whatshouldiread is a web app that upon user interaction returns a really good book recommendation from a heavily curated list of short reviews. If the returned book is not your jam, you can return another random choice, or dictate whether your recommendations are going to be in the arenas of fiction, poetry, or short fiction.

ergo;

## MVP
1. Landing page asks 'what should I read'
2. Interaction displays randomly chosen book with default views
3. Beneathe book are three options:
  1. "fuck no" - removes the book from list of possible returns and returns new book
  2. "I wanted x" changes returnable books to select from the type not currently displayed
  3. "I wanted y" same again
  So if the randomly selected title is a novel, the two buttons displayed will be "I wanted Poetry" and "I wanted Short Stories"
  // a future option includes a related table of New Zealand titles "Just show me Tangata Whenua thanks".

Subsequent features: 
1. View a cloud of all reviews by cover, based on determination, with no other information until clicked.
2. View a list of all reviews based on determination.
3. Return to a single-view basis.
4. Small Header descends on hover including [ just one book /// all / covers /// all / list /// who? ]
5. Some reviews will have hard-coded relevant additional features
6. Email yourself a recommendation for later
7. Find an independant bookshop near you based on the location you are browsing from.
   - consider a seperate page listing recommended shops around the world.
   - this would utilise an external api data to reference user view based on geographic location
8. Configure how much information to display about a book in the single review field.
9. Even if the review text is written in English, offer option to switch the basic functionality of the site to te reo.

## how does it work?
React // Redux // react-router-dom

## to view the experimentation:
1. clone the repository to your local machine
2. in the terminal, navigate to the relative directory, run npm install
3. run:
    npx knex migrate:latest
    npx knex seed:run
4. spin up npm run dev
5. Look at localhost:3000 in your preferred browser
