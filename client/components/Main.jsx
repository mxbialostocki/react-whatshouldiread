import React from 'react'
import Single from './single'
import Multi from './multi'

class Single extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Single />
        <Multi />
      </React.Fragment>
    )
  }
}

export default Single
