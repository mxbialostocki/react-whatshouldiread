import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Footer from './Footer'
import AppRoutes from './AppRoutes'
import { retrieveAllTitles } from '../actions'

function App (props) {
  props.dispatch(retrieveAllTitles())
  return (
    <React.Fragment>

      <Header />
      <AppRoutes />
      <Footer />

    </React.Fragment>
  )
}

export default connect()(App)
