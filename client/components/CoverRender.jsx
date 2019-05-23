import React from 'react'
import { Link } from 'react-router-dom'

export default function CoverRender (props) {
  return (
    // <div className="cover-list-image-wrapper">
    <Link to={`/books/review/${props.isbn}`}><img src={props.cover} className="cover-list-image grow"/></Link>
    // </div>
  )
}
