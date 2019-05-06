import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

// import xyz from actions

import Reviews from './Reviews'
import Main from './Main'
import ReviewFrame from './ReviewFrame'
import Covers from './Covers'

// import { retrieveAllTitles } from '../actions'

class AppRoutes extends React.Component {
  // componentDidMount () {
  //   this.props.dispatch(retrieveAllTitles())
  // }

  render () {
    return (

      <div>
        <Switch>

          <Route exact path='/' component={Main} />
          <Route exact path='/books/review' component={ReviewFrame}/>
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