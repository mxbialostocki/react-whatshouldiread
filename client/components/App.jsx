import React from 'react'
import { Route } from 'react-router-dom'
import Main from './Main'
import Resting from './Resting'
import Reviews from './Reviews'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>

        <Route exact path='/' component={Resting} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/listReviews' component={Reviews} />

      </React.Fragment>
    )
  }
}

export default App
