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
        <input type="text" placeholder="Введите название книги" className="search__input"/>
        <button className="search__button">искать</button>
      </div>
      {
        isFetcing === true ? (
          <div className="list">
            {book.map((book, index) => 
              <Book key={index} book={book} />
            )}
          </div>
        ) :
        (
          <div className="fetching">
            <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
              <circle className="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
          </div>
        )
      }
      
    </div>
  );
};

export default Main;