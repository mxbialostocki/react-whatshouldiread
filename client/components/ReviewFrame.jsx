import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Review from './Review'

function ReviewFrame (props) {
  // State One - Random / Everything
  const { titles } = props
  let activeTitles = titles
  // let novels = []
  // buttons = novels / stories / poetry / aotearoa

  // State Two - Random / Novels
  // buttons = everything / stories / poetry / aotearoa
  // function filterNovels () {
  //   titles.map(title => {
  //     if (title.determination.includes('novels')) {
  //       novels.push(title)
  //     }
  //   })
  //   activeTitles = novels
  // }
  // State Three - Random / Short Stories
  // buttons = everything / novels / poetry / aotearoa

  // State Four - Random / Poetry
  // buttons = everything / novels / stories / aotearoa

  // State Five - Random / Aotearoa
  // buttons = everything / novels / stories / poetry

  const randomTitle = Math.floor(Math.random() * activeTitles.length)

  // I need a ternary operator to determine whether to display a random title based on whether the state is set to "RANDOM" or to "SPECIFIC"

  // I need state changes based on whether the random state offers determinations - ie if the user selects "I want short stories" then only records with the determination "short stories" will be listed in bookdata

  // I need buttons with an onClick action that sets the state to the determination

  return (
    <React.Fragment>
      <div className="review-frame-container">
        <div>
          <Review bookdata={titles[randomTitle]}/>
        </div>
        <div className="review-frame-buttons-container">
          <h1 className="review-frame-buttons"><Link to="/books/review">not this one</Link></h1>
          {/* <button className="review-frame-buttons" id="novels" onClick={dispatch(filterNovels())}>i want novels</button>
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
