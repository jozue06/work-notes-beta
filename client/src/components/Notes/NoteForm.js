import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles.js'

export default class NoteForm extends Component {

  state = {
    name:'',
    content: '',
    id:this.props.id
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

  upNote = (note) => {
    console.log('updateNote NoteForm.js', note )
      // this is the action creator 
    this.props.updateNote(this.state);

    this.setState({
      editing: false,
      name: '', 
      content: ''
    }, () => console.log('update the state', note));

  
  
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
      </form>
        <S.Button id={this.props.id} onClick={() => this.upNote(this.state)}>{this.props.buttonText}</S.Button>
      </S.Text>
    );
  }
}

//onClick={this.updateNote}

// NoteForm.propTypes = {
//   onComplete: PropTypes.func.isRequired,
//   buttonText: PropTypes.string.isRequired,
// }