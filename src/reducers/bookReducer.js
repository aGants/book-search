const SET_BOOK = "SET_BOOK"
const SET_IS_FETCHING = "SET_IS_FETCHING"

const defaultState = {
  docs: [],
  isFetching: true,
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
    default: 
      return state
  }
}

export const setBook = (book) => ({ type: SET_BOOK, payload: book })
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool })