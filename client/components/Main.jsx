import React from 'react'
import { Link } from 'react-router-dom'

function Main () {
  return (
    <React.Fragment>
      <div className="review-frame-shape">
        <h1> <Link to="/books/review">what should I read</Link> </h1>
      </div>
    </React.Fragment>
  )
}

export default Main
