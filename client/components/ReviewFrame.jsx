import React from 'react'

import { connect } from 'react-redux'

import Review from './Review'

function ReviewFrame (props) {
  console.log('review frame bookdata:', props.bookdata)

  const { bookdata } = props
  const randomTitle = Math.floor(Math.random() * bookdata.length)

  return (
    <React.Fragment>
      <div className="review-frame-container">
        <div>
          <Review bookdata={bookdata[randomTitle]}/>
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

function mapStateToProps (state) {
  return {
    bookdata: state.retrieveAllTitles
  }
}

export default connect(mapStateToProps)(ReviewFrame)
