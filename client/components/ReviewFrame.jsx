import React from 'react'
import Review from './Review'
// import db from '../../db'

class ReviewFrame extends React.Component {
  // onComponentDidMount()

  render () {
    return (
      <React.Fragment>
        <div className="review-frame-container">
          <div>
            <Review />
          </div>
          <div className="review-frame-buttons-container">
            <button className="review-frame-buttons">fuck no</button>
            <button className="review-frame-buttons">i want poetry</button>
            <button className="review-frame-buttons">i want short stories</button>
            <button className="review-frame-buttons">tangata whenua only</button>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default ReviewFrame
