import React from 'react';
import './book.scss';

const Book = (props) => {
  const book = props.book
  
  return (
    <div className="book">
      <img className="book__cover" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={`Обложка ${book.title}`} />      
      <div className="book-info">
        <p className="book-info__title">{ book.title }</p>
          <p className="book-info-authors">
            {book.author_name ? (
              book.author_name.map((author, index) => 
              <span key={ index } className="book-info-authors__name">{ author }</span>
              )) : (<span className="book-info-authors__name">Неизвестный автор</span>)
            }
          </p>
        
      </div>
      
    </div>
  )
}

export default Book;