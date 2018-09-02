import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import notesState from './notes';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  notesState,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store;