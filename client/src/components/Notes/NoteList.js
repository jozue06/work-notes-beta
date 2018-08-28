import React from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles'
import NoteForm from './NoteForm'

const NoteList = (props) => {

  state = {
     editing: false
  }


  showEditForm = () => {
    this.setState({ editing: true }, () => console.log('sthate 1', this.props))
  }

  return (  
    <ul>
      <S.Text nDoubleClick={this.showEditForm} >{props.notes.map(Note => <li key={Note._id}>
      Title: 
        {Note.name} <br /> 
      Note Text: 
        <S.Section>{Note.content}</S.Section>
      <br />
      
      <S.Button note={Note} onClick={() => props.deleteNote(Note)}>Remove Note</S.Button>
        
      {this.state.editing && <NoteForm
      key={Note._id}
      note={Note}
      onComplete={props.updateNote}
      buttonText="update"
      name={Note.name}
      content={Note.content} />}</li>)}
        </S.Text>
        
    </ul>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
}



export default NoteList;