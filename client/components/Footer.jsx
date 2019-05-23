import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  footerstyle = {
    color: 'white'
  }
  render () {
    return (
      <footer>
        <small style={this.footerstyle}><Link to='/'>what should I read?</Link></small>
      </footer>
    )
  }
}

export default Footer
