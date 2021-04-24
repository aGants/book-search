import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux';
import bookReducer from './bookReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  book: bookReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))