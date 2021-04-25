import React from 'react';
import './book.scss';

const Book = (props) => {
  const book = props.book
  
  return (
    <div className="book">
      <img className="book__cover" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={`Обложка ${book.title}`} />      
      <div className="book-info">
        <p className="book-info__title">{ book.title }</p>
        <p className="book-info__author">{ book.author_name }</p>
      </div>
      
    </div>
  )
}

export default Book;