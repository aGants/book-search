import React from 'react';
import './book.scss';

const Book = (props) => {
  const book = props.book
  
  return (
    <div className="book">
      <span>{ book.title }</span>
      <span>{ book.author_name }</span>
      <span>{ book.first_publish_year }</span>
      <span>{ book.publisher }</span>
      <span>{ book.isbn }</span>
      <span>{ book.coverId }</span>
    </div>
  )
}

export default Book;