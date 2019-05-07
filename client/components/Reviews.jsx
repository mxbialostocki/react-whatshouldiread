import React from 'react'

import { connect } from 'react-redux'

import Review from './Review'

function Reviews (props) {
  const bookData = props.titles.map(book => {
    return <Review key={book.isbn} bookdata={book}/>
  })
  console.log('Reviews.jsx:', props.bookdata)

  return (
    <React.Fragment>
      <h2>this renders the list of recommendations!!</h2>
      {bookData}
    </React.Fragment>
  )
}

function mapStateToProps (state) {
  return {
    titles: state.retrieveAllTitles
  }
}

export default connect(mapStateToProps)(Reviews)
