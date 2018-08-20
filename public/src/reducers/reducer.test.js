import expenseReducer, { addExpense, ADD as ADD_EXPENSE } from './expense';
import categoryReducer, { addCategory, ADD as ADD_CATEGORY } from './category';
import defaultState from './defaultState';


describe('action creators', () => {

  it('should create add expense action', () => {

    const expense = { name: 'wine' };

    const action = addExpense(expense);

    expect(action.type).toBe(ADD_EXPENSE);

    expect(action.payload.name).toBe(expense.name);

  });

  it('should create add category action', () => {

    const category = { name: 'food' };

    const action = addCategory(category);

    expect(action.type).toBe(ADD_CATEGORY);

    expect(action.payload.name).toBe(category.name);

  });
});

describe('expense reducer', () => {

  it('should add a expense', () => {

    const expense = { name: 'twizzlers'};

    const action = addExpense(expense);

    const state = expenseReducer(defaultState, action);

    expect(state.expenses.length).toBe(1);

    expect(state.expenses[0].name).toBe(expense.name);
  });
});

describe('expense reducer', () => {

  it('should create add action', () => {
    const action = addExpense({name:'Snickers'});
    expect(action.type).toBe('Expense/ADD');
  });

  it('should create add expense', () => {
    const action = addExpense({name:'Snickers'});
    const state = expenseReducer(defaultState, action);
    expect(state.expenses.length).toBe(1);

  });
});

describe('category reducer', () => {

  it('should create add action', () => {
    const action = addCategory({name:'Foi Gras'});
    expect(action.type).toBe('Category/ADD');
  });

  it('should add category', () => {
    const action = addCategory({name:'Foi Gras'});
    const state = categoryReducer(defaultState, action);
    expect(state.categories.length).toBe(1);

  });
});