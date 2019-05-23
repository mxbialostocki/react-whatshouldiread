import React from 'react'

import { connect } from 'react-redux'

import CoverRender from './CoverRender'

function Covers (props) {
  const coverList = props.titles.map(book => {
    return <CoverRender key={book.isbn} isbn={book.isbn} cover={book.jacket_image_path} />
  })

  return (
    <React.Fragment>
      <div className="cover-list-container">
        {coverList}
      </div>
    </React.Fragment>
  )
}
function mapStateToProps (state) {
  return {
    titles: state.retrieveAllTitles
  }
}

export default connect(mapStateToProps)(Covers)
