import React from 'react'

class Review extends React.Component {
  render () {
    return (
      <React.Fragment>
        <img className="jacket" src="https://si.wsj.net/public/resources/images/BN-JU139_0810CL_JV_20150810114101.jpg">
        </img>
        <h2 className="title">title</h2>
        <h3 className="author">author</h3>
        <h3 className="review"></h3>
      </React.Fragment>
    )
  }
}

export default Review
