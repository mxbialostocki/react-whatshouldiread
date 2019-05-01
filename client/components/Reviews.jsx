import React from 'react'

import Review from './Review'

function Reviews (props) {
  const bookData = props.bookdata
  console.log('Reviews.jsx:', props.bookdata)

  return (
    <React.Fragment>
      <h2>this renders the list of recommendations!!</h2>
      {bookData.map(book => {
        return <Review key={book.isbn} book={book}/>
      })}
    </React.Fragment>
  )
}

export default Reviews
