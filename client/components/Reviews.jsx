import React from 'react'

import { connect } from 'react-redux'

import Review from './Review'

function Reviews (props) {
  const bookData = props.titles.map(book => {
    return <Review key={book.isbn} bookdata={book}/>
  })

  return (
    <React.Fragment>
      <h2>this renders the list of recommendations!!</h2>
      <div className="reviews-list-container">
        {bookData}
      </div>
    </React.Fragment>
  )
}

function mapStateToProps (state) {
  return {
    titles: state.retrieveAllTitles
  }
}

export default connect(mapStateToProps)(Reviews)
