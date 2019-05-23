import React from 'react'

import { connect } from 'react-redux'

import Review from './Review'

function ReviewFrame (props) {
  const { titles } = props
  const randomTitle = Math.floor(Math.random() * titles.length)

  return (
    <React.Fragment>
      <div className="review-frame-container">
        <div>
          <Review bookdata={titles[randomTitle]}/>
        </div>
        <div className="review-frame-buttons-container">
          <button className="review-frame-buttons">not this one</button>
          {/* <button className="review-frame-buttons">i want poetry</button>
          <button className="review-frame-buttons">i want short stories</button>
          <button className="review-frame-buttons">tangata whenua only</button> */}
        </div>
      </div>

    </React.Fragment>
  )
}

function mapStateToProps (state) {
  return {
    titles: state.retrieveAllTitles
  }
}

export default connect(mapStateToProps)(ReviewFrame)
