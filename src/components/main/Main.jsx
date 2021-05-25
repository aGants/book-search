import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../actions/book';
import Book from "./book/Book";
import Error from "./error/Error";
import './main.scss'

const Main = () => {
  const dispatch = useDispatch()
  const book = useSelector(state => state.book.docs)
  const isFetching = useSelector(state => state.book.isFetching)
  const isError = useSelector(state => state.book.isError)

  const [searchValue, setSearchValue] = useState("")
  const [timerId, setTimerId] = useState(null);
  
  useEffect(() => {
    dispatch(getBook())
  }, [])

  const searchHandler = (text) => {
    dispatch(getBook(text));
  }

  const onChangeHadler = (value) => {
    setSearchValue(value);
    clearTimeout(timerId);
    let search = setTimeout(() => {
      searchHandler(value)
    }, 1000);
    setTimerId(search);
  }

  return (
    <div className="main">
      {
        isError && 
        <Error />
      }
      <div className="search">
        <input 
          value={searchValue}
          onChange={(e) => onChangeHadler(e.target.value)}
          type="text"
          placeholder="Введите название книги" 
          className="search__input"
        />
        <button 
          onClick={()=> searchHandler(searchValue)}
          className="search__button"
        >
          искать
        </button>
      </div>
      { (searchValue.length === 0) ? null :
        ( isFetching ? 
          (
            <div className="fetching">
              <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
              </svg>
            </div>
          ) :
          (
            <div className="list">
              {book.map((book, index) => 
                <Book key={index} book={book} />
              )}
            </div>
          )
        )
      }
    </div>
  );
};

export default Main;