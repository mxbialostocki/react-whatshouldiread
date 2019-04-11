import React from 'react'
import Header from './Header'
import Home from './Home'
// import Review from './Review'
// import Reviews from './Reviews'
// import Covers from './Covers'
import Footer from './Footer'

class Main extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Home />

        <Footer />
      </React.Fragment>
    )
  }
}

export default Main
