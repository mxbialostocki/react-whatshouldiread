import React from 'react'
import { connect } from 'react-redux'
// import xyz from actions

import { Route, Switch } from 'react-router-dom'

import Reviews from './Reviews'
import Main from './Main'
import ReviewFrame from './ReviewFrame'
import Covers from './Covers'

import { retrieveAllTitles } from '../api'

class AppRoutes extends React.Component {
  state = {
    bookdata: ''
  }

  componentDidMount () {
    retrieveAllTitles()
      .then(bookData => {
        console.log('AppRoutes: ', bookData)
        this.setState({
          bookdata: bookData
        })
      })
  }

  render () {
    const { dispatch, children } = this.props
    console.log('AppRoutes / render ', this.state.bookdata)
    return (

      <div>
        <Switch>

          <Route exact path='/' component={Main} />
          <Route exact path='/books/review' component={ReviewFrame} bookdata={this.state.bookdata}/>
          <Route exact path='/books/alllist' component={Reviews} bookdata={this.state.bookdata}/>
          <Route exact path='/books/allcovers' component={Covers} bookdata={this.state.bookdata}/>

        </Switch>
      </div>

    )
  }
}

export default connect()(AppRoutes)
