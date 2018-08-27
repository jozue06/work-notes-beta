import React from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles'
import NoteForm from './NoteForm'

const NoteList = (props) => {

  return (  
    <ul>
      <S.Text>{props.notes.map(Note => <li key={Note._id}>
      Title: 
        {Note.name} <br /> 
      Note Text: 
        <S.Section>{Note.content}</S.Section>
      <br />
      
      <S.Button note={Note} onClick={() => props.deleteNote(Note)}>Remove Note</S.Button>
        
      <NoteForm
      key={Note._id}
      note={Note}
      onComplete={props.updateNote}
      buttonText="update"
      name={Note.name}
      content={Note.content} /></li>)}
        </S.Text>
        
    </ul>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
}



export default NoteList;