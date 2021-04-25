import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../actions/book';
import Book from "./book/Book";
import './main.scss'

const Main = () => {
  const dispatch = useDispatch()
  const book = useSelector(state => state.book.docs)
  const isFetcing = useSelector(state => state.book.isFetcing)
  
  useEffect( ()=> {
    dispatch(getBook())
  }, [])

  return(
    <div className="main">
      <div className="search">
        <input type="text" placeholder="Введите название книги" className="search-input"/>
        <button>Искать</button>
      </div>
      <div className="list">
      {book.map((book, index) => 
        <Book key={index} book={book} />
        )}
      </div>
    </div>
  );
};

export default Main;