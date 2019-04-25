import React from 'react'
import { Link } from 'react-router-dom'

class Resting extends React.Component {
  render () {
    return (
      <div className="review-frame-shape">
        <h1> <Link to="/books/review">what should I read</Link> </h1>
      </div>
    )
  }
}

export default Resting
