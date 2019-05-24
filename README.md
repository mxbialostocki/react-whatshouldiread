# react-whatshouldiread

## what is this?
whatshouldiread is a web app that upon user interaction returns a really good book recommendation from a heavily curated list of short reviews. If the returned book is not your jam, you can return another random choice, or dictate whether your recommendations are going to be in the arenas of fiction, poetry, or short fiction.

ergo;

## MVP
1. Landing page asks 'what should I read'
2. Interaction displays randomly chosen book with default views.
3. Beneath book is a button:
  - "not this one" - removes the book from list of possible returns and returns new book.
4. Option to view a cloud of covers based on determination.
5. Minimal header allows navigation between the three views.
  

## Future features: 
1. View a cloud of all reviews by cover, based on determination, with no other information until clicked.
2. View a list of all reviews based on determination.
3. Some reviews will have hard-coded relevant additional features
4. Email yourself a recommendation for later
5. Find an independent bookshop near you based on the location you are browsing from.
   - consider a seperate page listing recommended shops around the world.
   - this would utilise an external api data to reference user view based on geographic location
6. Configure how much information to display about a book in the single review field.
7. Even if the review text is written in English, offer option to switch the basic functionality of the site to te reo.
8. So if the randomly selected title is a novel, the two buttons displayed will be "I wanted Poetry" and "I wanted Short Stories"
9. a future option includes a related table of New Zealand titles "Just show me Tangata Whenua thanks".

## Dev to-do list
[] When title is selected from "covers-all" link to an individual instance of the review
[] If a book is rejected, it is removed from the redux store list of feasible random titles
[] User can select what kind of books they want to be shown based on "determination" column using buttons in the ReviewFrame.
[] // If activeFilter = "novels" then a function will pull only the novels from the redux store
[] Impliment a UI library to make the basic css redundant
[] Replace all seed data with original recommendations
[] Shift the url jacket links to a local store of regulated images

## how does it work?
React // Redux // Express // Knex

## to view the experimentation:
1. clone the repository to your local machine
2. in the terminal, navigate to the relative directory, run npm install
3. run:
    npx knex migrate:latest
    npx knex seed:run
4. spin up npm run dev
5. Look at localhost:3000 in your preferred browser
