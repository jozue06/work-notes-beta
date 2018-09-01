import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles.js'

export default class NoteForm extends Component {

  state = {
    name:'',
    content: '',
  }

  submitHandler = (event) => {
    console.log('hit handler')
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: '', content: ''});
  }

  showEditForm = () => {
    this.setState({ editing: true }, () => console.log('sthate 1', this.props))
  }

  updateNote = (note) => {
    this.setState({
      editing: false
    }, () => console.log('update the state', note));
    this.props.updateNote(note);
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
        <S.Button updateNote={this.updateNote}>{this.props.buttonText}</S.Button>
      </form>
      </S.Text>
    );
  }
}

//onClick={this.updateNote}

NoteForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}