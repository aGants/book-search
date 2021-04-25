import axios from 'axios';
import {setBook, setIsFetching} from '../../reducers/bookReducer'

export const getBook = (searchTitle) => {
  if (searchTitle == "") {
    searchTitle = "Fantastic Mr. Fox"
}
  return async (dispatch) => {
    dispatch(setIsFetching(true))
    const response = await axios.get(`https://openlibrary.org/search.json?title=${searchTitle}`)
    dispatch(setBook(response.data))
  }
}