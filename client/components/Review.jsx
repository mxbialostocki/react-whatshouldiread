import React from 'react'
import { retrieveRandomTitle } from '../api'

class Review extends React.Component {
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
    retrieveRandomTitle()
      .then(bookData => {
        console.log('review.jsx:', bookData)
        const randomTitle = Math.floor(Math.random() * bookData.length)
        const { jacket_image_path, title, author_first, author_last, publisher, publication_year, reviewer_name, review_head, review_body } = bookData[randomTitle]
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
        <div className="book-data">
          <img className="jacket" src={this.state.jacket_image_path} alt={`${this.state.title} by ${this.state.author_first} ${this.state.author_last}`} />
          <div className="book-display">

            <h2 className="title">{this.state.title}</h2>
            <h3 className="author">{this.state.author_first} {this.state.author_last}</h3>
            <p className="publishing-info">{this.state.publisher} {this.state.publication_year}</p>

          </div>
          
          <div className="review-display">
            <p className="review-head">{this.state.review_head}</p>
            <p className="reviewer">{this.state.reviewer_name}</p>
            <p className="review-body">{this.state.review_body}</p>
          </div>

        </div>

      </React.Fragment>
    )
  }
}

export default Review
