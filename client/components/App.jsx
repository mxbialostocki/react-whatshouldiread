import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { retrieveAllTitles } from '../api'
import AppRoutes from './AppRoutes';

class App extends React.Component {

  constructor (props) {
    super (props) 
    this.state = {
      titles: [],
      errorMessage: ''
    }
    this.findTitles = this.findTitles.bind(this)
  }

  componentDidMount() {
    this.findTitles()
  }

  findTitles () {
    return retrieveAllTitles()
    .then(titles => {
      this.setState({titles: titles})
    })
    .catch(err => {
      this.setState({errorMessage: err.message})
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
