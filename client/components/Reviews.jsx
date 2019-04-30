import React from 'react'

import Review from './Review'
import { retrieveAllTitles } from '../api'

class Reviews extends React.Component {
  state = {
    isbn: '',
    jacket_image_path: '',
    title: '',
    author_first: '',
    author_last: '',
    publisher: '',
    publication_year: '',
    determination: '',
    reviewer_name: '',
    review_head: '',
    review_body: ''
  }

  componentDidMount () {
    retrieveAllTitles()
      .then(bookData => {
        console.log('review.jsx:', bookData)
        const { jacket_image_path, title, author_first, author_last, publisher, publication_year, reviewer_name, review_head, review_body } = bookData
        this.setState({
          jacket_image_path,
          title,
          author_first,
          author_last,
          publisher,
          publication_year,
          reviewer_name,
          review_head,
          review_body
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <h2>this renders the list of recommendations!!</h2>

      </React.Fragment>
    )
  }
}

export default Reviews
