import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Review from './Review'

import { activePageNovels, activePageShortStories, activePagePoetry, activePageAotearoa, activePageMemoir } from '../actions/index'

function ReviewFrame (props) {
  const { titles, activePage, dispatch } = props

  // preen list of activeTitles according to determination: if determination is all, offer all reviews

  function filterTitles (determination) {
    if (determination === 'all') {
      return titles
    }
    return titles.filter(title => title.determination.includes(determination))
  }

  // let the active titles be determined by the activePage

  let activeTitles = filterTitles(activePage)
  // console.log(activeTitles)
  // select a title at random based on index
  const randomTitle = Math.floor(Math.random() * activeTitles.length)

  return (
    <React.Fragment>
      <div className="review-frame-container">
        <div>
          <Review bookdata={activeTitles[randomTitle]}/>
        </div>
        <ul className="review-frame-buttons-container">
          <li className="review-frame-buttons"><Link to="/books/review"><h1>not this one</h1></Link></li>
          <li className="review-frame-buttons" id="btn-novels" onClick={() => dispatch(activePageNovels())}><h1>i want novels</h1></li>
          <li className="review-frame-buttons" id="btn-shorts" onClick={() => dispatch(activePageShortStories())}><h1>i want short stories</h1></li>
          <li className="review-frame-buttons" id="btn-poetry" onClick={() => dispatch(activePagePoetry())}><h1>poetry only</h1></li>
          <li className="review-frame-buttons" id="btn-aotearoa" onClick={() => dispatch(activePageAotearoa())}><h1>aotearoa</h1></li>
          <li className="review-frame-buttons" id="btn-memoir" onClick={() => dispatch(activePageMemoir())}><h1>memoir please</h1></li>
        </ul>
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
