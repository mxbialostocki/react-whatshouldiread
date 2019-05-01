import React from 'react'
import Review from './Review'

function ReviewFrame (props) {
  const randomTitle = Math.floor(Math.random() * props.length)
  console.log('review frame bookdata:', props, props.bookdata)

  return (
    <React.Fragment>
      <div className="review-frame-container">
        <div>
          <Review bookdata={props.bookdata[randomTitle]}/>
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

export default ReviewFrame
