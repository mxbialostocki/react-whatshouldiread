import React from 'react'
import Review from './Review'
import db from '../../db'

class Home extends React.Component {
  // onComponentDidMount()

  render () {
    return (
      <div>

      <h1 className="resting-title">what should I read ?</h1>
      <Review />
      <button>fuck no</button>
      <button>i want poetry</button>
      <button>i want short stories</button>
      <button>i want tangata whenua</button>

      </div>

    )
  }
}

export default Home
