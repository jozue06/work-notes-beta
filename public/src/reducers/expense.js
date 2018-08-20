import uuid from 'uuid/v1';
import defaultState from './defaultState';

// Actions
export const ADD = 'Expense/ADD';
export const DELETE = 'Expense/DELETE';


// Reducer
export default function reducer(state = defaultState, action) {

  const { type, payload } = action;

  switch (type) {
    case ADD:
      payload.id = uuid(); // this ok or need fresh copy?

      return {
        ...state,
        expenses: [...state.expenses, payload]
      };
      case DELETE:
      // console.log(state.categories)
      return {
        ...state,
        expenses: state.expenses.filter(expense => {
          console.log('payss', payload)
          return expense.id !== payload.id})
      };

    default: return state;
  }
}

// Action Creators
export function addExpense(expense) {
  return {
    type: ADD,
    payload: expense
  }
}

export function deleteExpense(expense) {
  return {
    type: DELETE,
    payload: expense
  }
}