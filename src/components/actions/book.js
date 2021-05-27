import axios from 'axios';
import {setBook, setIsError, setIsFetching} from '../../reducers/bookReducer'

export const getBook = (searchTitle = "/") => {
  if (searchTitle == "") {
    searchTitle = "/"
  }
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true))
      const response = await axios.get(`https://openlibrary.org/search.json?title=${searchTitle}`)
      dispatch(setBook(response.data))
    } catch(e) {
      dispatch(setIsError(true))
      dispatch(setIsFetching(false))
      setTimeout( () => {
        dispatch(setIsError(false))
      }, 10000)
    }
  }
}