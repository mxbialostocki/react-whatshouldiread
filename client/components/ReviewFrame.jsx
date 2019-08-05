import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Review from './Review'

import { activePageNovels, activePageShortStories, activePagePoetry, activePageAotearoa, activePageMemoir } from '../actions/index'

function ReviewFrame (props) {
  // State One - Random / Everything
  const { titles, activePage, dispatch } = props
  // buttons = novels / stories / poetry / aotearoa

  function filterTitles (determination) {
    console.log(determination)
    if (determination === "all") {
      return titles
    }
    return titles.filter(title => title.determination.includes(determination))
  }

  let activeTitles = filterTitles(activePage)
  console.log(activeTitles)
  const randomTitle = Math.floor(Math.random() * activeTitles.length)

  // I need buttons with an onClick action that sets the state to the determination

  // 1. on click dispatches activePageNovels
  // 2. action returns state
  // 3. 
  return (
    <React.Fragment>
      <div className="review-frame-container">
        <div>
          <Review bookdata={activeTitles[randomTitle]}/>
        </div>
        <div className="review-frame-buttons-container">
          <button className="review-frame-buttons"><Link to="/books/review"><h1>not this one</h1></Link></button>
          <button className="review-frame-buttons" id="btn-novels" onClick={() => dispatch(activePageNovels())}><h1>i want novels</h1></button>
          <button className="review-frame-buttons" id="btn-shorts" onClick={() => dispatch(activePageShortStories())}><h1>i want short stories</h1></button>
          <button className="review-frame-buttons" id="btn-poetry" onClick={() => dispatch(activePagePoetry())}><h1>poetry only</h1></button>
          <button className="review-frame-buttons" id="btn-aotearoa" onClick={() => dispatch(activePageAotearoa())}><h1>aoteaora</h1></button>
          <button className="review-frame-buttons" id="btn-memoir" onClick={() => dispatch(activePageMemoir())}><h1>memoir please</h1></button>
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
