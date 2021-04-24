import axios from 'axios';
import {setBook} from '../../reducers/bookReducer'

export const getBook = (searchTitle = "Fantastic Mr. Fox") => {
  return async (dispatch) => {
    const response = await axios.get(`https://openlibrary.org/search.json?title=${searchTitle}`)
    dispatch(setBook(response.data))
  }
}