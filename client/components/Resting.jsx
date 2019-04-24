import React from 'react'
import { Link } from 'react-router-dom'

class Resting extends React.Component {
  render () {
    return (
      <h1> <Link to="/books/review">what should I read</Link> </h1>
    )
  }
}

export default Resting
