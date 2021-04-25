import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../actions/book';
import Book from "./book/Book";
import './main.scss'

const Main = () => {
  const dispatch = useDispatch()
  const book = useSelector(state => state.book.docs)
  
  useEffect( ()=> {
    dispatch(getBook())
  }, [])

  return(
    <div className="main">
      {book.map((book,index) => 
        <Book key={index} book={book} />
        )}
    </div>
  );
};

export default Main;