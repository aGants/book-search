import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../actions/book';
import Book from "./book/Book";
import Error from "./error/Error";
import Fetching from "./fetching/Fetching"
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
        isError && <Error />
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
          ( <Fetching /> ) :
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