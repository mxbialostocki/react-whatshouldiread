import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Review from './Review'

import { ACTIVE_PAGE_NOVELS, ACTIVE_PAGE_SHORT_STORIES, ACTIVE_PAGE_POETRY, ACTIVE_PAGE_AOTEAROA } from '../actions/index'

function ReviewFrame (props) {
  // State One - Random / Everything
  const { titles } = props
  let activeTitles = titles
  // let novels = []
  // buttons = novels / stories / poetry / aotearoa

  // State Two - Random / Novels
  // buttons = everything / stories / poetry / aotearoa
  function filterTitles (determination) {
    activeTitles = []
    titles.map(title => {
      if (title.determination.includes(determination)) {
        activeTitles.push(title)
      }
    })
    return activeTitles
  }
  // State Three - Random / Short Stories
  // buttons = everything / novels / poetry / aotearoa

  // State Four - Random / Poetry
  // buttons = everything / novels / stories / aotearoa

  // State Five - Random / Aotearoa
  // buttons = everything / novels / stories / poetry

  const randomTitle = Math.floor(Math.random() * activeTitles.length)

  // I need state changes based on whether the random state offers determinations - ie if the user selects "I want short stories" then only records with the determination "short stories" will be listed in bookdata

  // I need buttons with an onClick action that sets the state to the determination

  return (
    <React.Fragment>
      <div className="review-frame-container">
        <div>
          <Review bookdata={activeTitles[randomTitle]}/>
        </div>
        <div className="review-frame-buttons-container">
          <button className="review-frame-buttons"><Link to="/books/review"><h1>not this one</h1></Link></button>
          <button className="review-frame-buttons" id="btn-novels" onClick={filterTitles('novels')}><Link to="/books/review"><h1>i want novels</h1></Link></button>
          <button className="review-frame-buttons" id="btn-shorts"><h1>i want short stories</h1></button>
          <button className="review-frame-buttons" id="btn-aotearoa"><h1>aotearoa only!</h1></button>
        </div>
      </div>

    </React.Fragment>
  )
}

function mapStateToProps (state) {
  return {
    titles: state.retrieveAllTitles,
    activePage: state.activePage
  }
}

export default connect(mapStateToProps)(ReviewFrame)
