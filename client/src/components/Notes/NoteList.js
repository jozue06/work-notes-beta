import React from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles'
import NoteForm from './NoteForm'

export default class NoteList extends React.Component {

  state = {
    editing: false,
    id: '',
  };

  handleEdit = (id) => {
    this.setState({ editing: this.state.id === id ? !this.state.editing : true, id: id  })
  }

  render(){
  return (  
    <ul>
      <S.Text>{this.props.notes.map(Note => <li onDoubleClick={ () =>this.handleEdit(Note._id)} key={Note._id}>
      Title: 
        {Note.name} <br /> 
      Note Text: 
        <S.Section>{Note.content}</S.Section>
      <br />
      
      <S.Button note={Note} onClick={() => this.props.deleteNote(Note)}>Remove Note</S.Button>

     {this.state.editing && this.state.id === Note._id &&
      <NoteForm
      key={Note._id}
      note={Note}
      onComplete={this.props.updateNote}
      id={Note._id}
      buttonText="update Note"
      name={Note.name}
      content={Note.content} />}
      </li>)}
        </S.Text>
        
    </ul>
  );
};
}


NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
}