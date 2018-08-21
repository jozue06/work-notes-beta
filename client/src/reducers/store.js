import { createStore, combineReducers, applyMiddleware  } from 'redux';

import notesState from './notes';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  notesState,
});


const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;
