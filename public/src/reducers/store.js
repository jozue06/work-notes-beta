import { createStore, combineReducers, applyMiddleware, compose  } from 'redux';


import expenseState from './expense';
import categoryState from './category';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  expenseState,
  categoryState,
});

const middleware = [thunk];

const store = createStore(rootReducer,
  compose(
  applyMiddleware(...middleware),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    )
export default store;
