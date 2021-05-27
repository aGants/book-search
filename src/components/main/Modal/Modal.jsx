import React from 'react';
import './modal.scss'

const Modal = ({ active, setActive, book }) => {
  
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {book.cover_i && 
          <div>
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={`Обложка ${book.title}`} />      
          </div>
          }
        <div>
          <p className="modal-content__title">{ book.title }</p>
          
          { book.first_publish_year && 
          <p>Это издание книги было впервые опубликовано в { book.first_publish_year } году</p>}
          { book.isbn &&  <p>ISBN: { book.isbn[0] }</p>}

          { book.publisher &&
            <p className="modal-content-list">
              <span>Издатель: </span> 
              { book.publisher.map((publisher, index) => 
                <span key={ index } className="modal-content-list__publisher">{ publisher }</span>
              )}
            </p>
          }
        </div>
      </div>
    </div>
  )
}

export default Modal;