import { createStore, combineReducers, applyMiddleware  } from 'redux';

import notesState from './notes';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  notesState,
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware))
export default store;
