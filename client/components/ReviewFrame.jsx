import React from 'react'
import Review from './Review'
// import db from '../../db'

class ReviewFrame extends React.Component {
  // onComponentDidMount()

  render () {
    return (
      <React.Fragment>

        <div>
          <Review />
        </div>
        <div>
          <button>fuck no</button>
          <button>i want poetry</button>
          <button>i want short stories</button>
          <button>tangata whenua only</button>
        </div>
      </React.Fragment>
    )
  }
}

export default ReviewFrame
