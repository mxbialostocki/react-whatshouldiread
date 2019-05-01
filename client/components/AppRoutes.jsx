import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

// import xyz from actions

import Reviews from './Reviews'
import Main from './Main'
import ReviewFrame from './ReviewFrame'
import Covers from './Covers'

import { retrieveAllTitles } from '../actions'

function AppRoutes (props) {
  const { dispatch, bookdata } = props

  dispatch(retrieveAllTitles())

  return (

    <div>
      <Switch>

        <Route exact path='/' component={Main} />
        <Route exact path='/books/review' component={ReviewFrame} bookdata={bookdata}/>
        <Route exact path='/books/alllist' component={Reviews} bookdata={bookdata}/>
        <Route exact path='/books/allcovers' component={Covers} bookdata={bookdata}/>

      </Switch>
    </div>

  )
}

function mapStateToProps (state) {
  return {
    bookdata: state.retrieveAllTitles
  }
}

export default connect(mapStateToProps)(AppRoutes)
