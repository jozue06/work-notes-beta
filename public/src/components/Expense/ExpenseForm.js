import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../../components/styles/styles.js'


export default class ExpenseForm extends Component {

  state = {
    name:'',
    amount:'',
    categoryID: this.props.categoryID,
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: '', amount: ''});
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
        <input name="name" value={this.state.name} onChange={this.changeHandler} type="text" placeholder="Expense"/>
        <input name="amount" value={this.state.amount} onChange={this.changeHandler} type="number" placeholder="Amount"/>
        <br />
        <S.Button>{this.props.buttonText}</S.Button>
      </form>
      </S.Text>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}