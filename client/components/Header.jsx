import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div>
        <ul id="nav-main">
          <li className="nav-child"><a href="/books/review">just one book</a></li>
          <li className="nav-child"><a href="/books/allcovers">all / covers</a></li>
          <li className="nav-child"><a href="/books/alllist"> all / list</a></li>
        </ul>
      </div>
    )
  }
}

export default Header
