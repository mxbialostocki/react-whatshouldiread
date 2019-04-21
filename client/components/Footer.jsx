import React from 'react'

class Footer extends React.Component {
  footerstyle= {
    color: 'white'
  }
  render () {
    return (
      <footer>
        <small style={this.footerstyle}>ghosts in the m a c h i n e</small>
      </footer>
    )
  }
}

export default Footer
