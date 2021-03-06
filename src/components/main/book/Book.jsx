import React, { useState } from 'react';
import './book.scss';
import Modal from '../Modal/Modal';

const Book = (props) => {
  const [modalActive, setModalActive] = useState(false)
  const book = props.book
  
  return (
    <div className="book" >
      <a onClick={() => setModalActive(true)}>
        {book.cover_i ? (
          <img className="book__cover" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={`Обложка ${book.title}`} />      
        ) : (
          <div className="book__cover-block">
            <p>{ book.title }</p>
            </div>
        )
        }
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
      </a>
      <Modal active={modalActive} setActive={setModalActive} book={book} />
    </div>
  )
}

export default Book;