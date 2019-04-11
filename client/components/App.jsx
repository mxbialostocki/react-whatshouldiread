import React from 'react'
import { Route } from 'react-router-dom'
import Main from './Main'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>

        <Route exact path='/' component={Main} />

      </React.Fragment>
    )
  }
}

export default App
