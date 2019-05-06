import React from 'react'

import { connect } from 'react-redux'

import Review from './Review'

function Reviews (props) {
  const bookData = props.bookdata.map(book => {
    return <Review key={book.isbn} book={book}/>
  })
  console.log('Reviews.jsx:', props.bookdata)

  return (
    <React.Fragment>
      <h2>this renders the list of recommendations!!</h2>
      {bookData}
    </React.Fragment>
  )
}

export default connect()(Reviews)
