import React from 'react';
import { connect } from 'react-redux';
import { addCategory, deleteCategory, getCategory} from '../../reducers/category';

import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';



class CategoryContainer extends React.Component{
  
  componentDidMount(){
    console.log('did mount')
   this.props.getCategory();
    }


  render(){
  return (
    <section>
      <h2>Category</h2>
      <CategoryForm buttonText="add Category" onComplete={this.props.addCategory}  />
      <CategoryList categories={this.props.categories} deleteCategory={this.props.deleteCategory} />
    </section>
  );
};

}
const mapStateToProps = (state) => ({ categories : state.categoryState.categories });
const mapDispatchToProps = (dispatch) => ({
  addCategory: category => dispatch(addCategory(category)),
  getCategory: category => dispatch(getCategory(category)),
  deleteCategory: category => dispatch(deleteCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);