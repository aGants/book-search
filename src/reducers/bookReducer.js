const SET_BOOK = "SET_BOOK"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_IS_ERROR = "SET_IS_ERROR"

const defaultState = {
  docs: [],
  isFetching: true,
  isError: false
}

export default function bookReducer(state = defaultState, action) {
  switch(action.type) {
    case SET_BOOK:
      return {
        ...state,
        docs: action.payload.docs,
        isFetching: false
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case SET_IS_ERROR:
      return {
        ...state,
        isError: action.payload
      }  
    default: 
      return state
  }
}

export const setBook = (book) => ({ type: SET_BOOK, payload: book })
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool })
export const setIsError = (bool) => ({ type: SET_IS_ERROR, payload: bool })