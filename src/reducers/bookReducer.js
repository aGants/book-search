const SET_BOOK = "SET_BOOK"

const defaultState = {
  docs: [],
  isFetching: true,
}

export default function bookReducer(state = defaultState, action) {
  switch(action.type) {
    case SET_BOOK:
      return {
        ...state,
        docs: action.payload.docs
      }
    default: 
      return state
  }
}

export const setBook = (book) => ({ type: SET_BOOK, payload: book })
