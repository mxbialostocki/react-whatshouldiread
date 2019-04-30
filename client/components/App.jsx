import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { retrieveAllTitles } from '../api'
import AppRoutes from './AppRoutes'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      titles: [],
      errorMessage: ''
    }
    this.findTitles = this.findTitles.bind(this)
  }

  componentDidMount () {
    retrieveAllTitles()
      .then(bookData => {
        console.log('review.jsx:', bookData)
        const randomTitle = Math.floor(Math.random() * bookData.length)
        const { jacket_image_path, title, author_first, author_last, publisher, publication_year, reviewer_name, review_head, review_body } = bookData[randomTitle]
      })
  }

  render () {
    return (
      <React.Fragment>

        <Header />
        <AppRoutes />
        <Footer />

      </React.Fragment>
    )
  }
}

export default App
