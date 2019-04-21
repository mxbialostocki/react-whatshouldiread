import React from 'react'
import { retrieveRandomTitle } from '../api/api'

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

  componentDidMount() {
    retrieveRandomTitle()
    .then(bookData => {
      const { jacket_image_path, title, author_first, author_last, publisher, publication_year, determination} = bookData
      this.setState({
        jacket_image_path,
        title,
        author_first,
        author_last,
        publisher,
        publication_year
      })
    })
  }

  render () {
    return (
      <React.Fragment>
        <img className="jacket" src={this.state.jacket_image_path} alt={this.state.title}>
        </img>
        <h2 className="title">{this.state.title}</h2>
        <h3 className="author">{this.state.author_first}</h3>
        <p className="publisher">{this.state.publisher}</p>
        <p className="publication-year">{this.state.publication_year}</p>
      </React.Fragment>
    )
  }
}

export default Review
