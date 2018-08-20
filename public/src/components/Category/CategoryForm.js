import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../../components/styles/styles.js'

export default class CategoryForm extends Component {

  state = {
    name:'',
    budget: '',
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: '', budget: ''});
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
    
  }

  render() {
    return (
      <S.Text>
      <form onSubmit={this.submitHandler}>
        <input name="name" value={this.state.name} onChange={this.changeHandler} type="text" placeholder="category"/>
        <input name="budget" value={this.state.budget} onChange={this.changeHandler} type="number" placeholder="budget"/>
        <br />
        <S.Button>{this.props.buttonText}</S.Button>
      </form>
      </S.Text>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}