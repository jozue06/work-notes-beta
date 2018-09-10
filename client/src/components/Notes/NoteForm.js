import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles.js'
import ToggleButtons from './Editor'
import TextField from '@material-ui/core/TextField';

export default class NoteForm extends Component {

  state = {
    name: this.props.name || '',
    content: this.props.content || '',
    id: this.props.id,
    timeStamp: new Date().valueOf(),
    user: '',
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: '', content: '', });
  }

  showEditForm = () => {
    this.setState({ editing: true })
  }


  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render() {
    return (

      <S.Input>
  <ToggleButtons></ToggleButtons>
        <form onSubmit={this.submitHandler}>
          {/* <input name="name" value={this.state.name} onChange={this.changeHandler} type="text" placeholder="Note Name"/>
        <br />
        
        <S.Editor name="content" value={this.state.content} onChange={this.changeHandler} type="text" placeholder="Note Content">
        
        </S.Editor>
        <br />
        */}

          <TextField
            name="name"
            label="Title:"
            value={this.state.name}
            onChange={this.changeHandler}
            type="text"
            placeholder="Title" />
        <br />
          <TextField
            id="textarea"
            label="Note:"
            placeholder=""
            multiline
            name="content"
            value={this.state.content}
            onChange={this.changeHandler}
            type="text"
          />
          <br />
          <S.Button id={this.props.id} >{this.props.buttonText}</S.Button>
        </form>
      </S.Input>
    );
  }
}


NoteForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}
