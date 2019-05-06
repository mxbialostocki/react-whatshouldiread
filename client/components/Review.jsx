import React from 'react'

function Review (props) {
  const { jacket_image_path, title, author_first, author_last, publisher, publication_year, reviewer_name, review_head, review_body } = props.bookdata
  return (
    <React.Fragment>

      <div className="book-data">
        <img className="jacket" src={jacket_image_path} alt={`${title} by ${author_first} ${author_last}`} />
        <div className="book-display">

          <h2 className="title">{title}</h2>
          <h3 className="author">{author_first} {author_last}</h3>
          <p className="publishing-info">{publisher} {publication_year}</p>

        </div>

        <div className="review-display">
          <p className="review-head">{review_head}</p>
          <p className="reviewer">{reviewer_name}</p>
          <p className="review-body">{review_body}</p>
        </div>

      </div>

    </React.Fragment>
  )
}

export default Review
