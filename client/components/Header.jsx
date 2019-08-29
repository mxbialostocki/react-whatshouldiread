import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { activePageAll } from '../actions/index'

function Header (props) {
  const { dispatch } = props

  return (
    <div>
      <ul id="nav-main">
        <li className="nav-child" onClick={() => dispatch(activePageAll())}><Link to="/books/review">just one book</Link></li>
        <li className="nav-child"><Link to="/books/allcovers">all / covers</Link></li>
        <li className="nav-child"><Link to="/books/alllist">all / list</Link></li>
      </ul>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    activePage: state.activePage
  }
}

export default connect(mapStateToProps)(Header)
