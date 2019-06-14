import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Reviews from './Reviews'
import Main from './Main'
import ReviewFrame from './ReviewFrame'
import Covers from './Covers'

class AppRoutes extends React.Component {
  render () {
    return (

      <div>
        <Switch>

          <Route exact path='/' component={Main} />
          <Route exact path='/books/review' component={ReviewFrame}/>
          <Route exact path='/books/review/:isbn' component={ReviewFrame}/>
          <Route exact path='/books/alllist' component={Reviews}/>
          <Route exact path='/books/allcovers' component={Covers}/>

        </Switch>
      </div>

    )
  }
}

function mapStateToProps (state) {
  return {
    bookdata: state.retrieveAllTitles
  }
}

export default connect(mapStateToProps)(AppRoutes)
