import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <div>
        <ul id="nav-main">
          <li className="nav-child"><Link to="/books/review">just one book</Link></li>
          <li className="nav-child"><Link to="/books/allcovers">all / covers</Link></li>
          <li className="nav-child"><Link to="/books/alllist"> all / list</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header
