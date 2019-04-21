import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div>
        <ul id="nav-main">
          <li className="nav-child"><a href="/review">just one book</a></li>
          <li className="nav-child"><a href="/allcovers">all / covers</a></li>
          <li className="nav-child"><a href="/alllist"> all / list</a></li>
        </ul>
      </div>
    )
  }
}

export default Header
