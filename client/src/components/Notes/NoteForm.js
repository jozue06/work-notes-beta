import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles.js'

export default class NoteForm extends Component {

  state = {
    name:'',
    content: '',
    id: this.props.id
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: '', content: ''});
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
        <input name="name" value={this.state.name} onChange={this.changeHandler} type="text" placeholder="Note Name"/>
        <br />
        <textarea name="content" value={this.state.content} onChange={this.changeHandler}type="text" placeholder="Note?"/>
        <br />
        <S.Button id={this.props.id} >{this.props.buttonText}</S.Button>
      </form>
      </S.Text>
    );
  }
}


NoteForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}