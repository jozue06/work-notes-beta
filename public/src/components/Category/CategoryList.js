import React from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from '../Expense/ExpenseForm';
import ExpenseList from '../Expense/ExpenseList';
import S from '../../components/styles/styles.js'


import { connect } from 'react-redux';
import { addExpense } from '../../reducers/expense';

const CategoryList = (props) => {

  
  console.log('cat list props', props.categories[0])
  
  return (  
    <ul>
      <S.Text>{props.categories.map(Category => <li key={Category._id}>
      name of cate: {Category.name} <br /> Total Budget for Category: {Category.budget}
      <br />
      
      <S.Button category={Category} onClick={() => props.deleteCategory(Category)} >Remove Category</S.Button>
        <ExpenseForm  buttonText="add expense" onComplete={props.addExpense} categoryID={Category}/> 
        <ExpenseList expenses={props.expenses} id={Category._id} deleteExpense={props.deleteExpense} /></li>)}
        </S.Text>
      
    </ul>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}


const mapStateToProps = (state) => ({ expenses : state.expenseState.expenses });
const mapDispatchToProps = { addExpense };
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);