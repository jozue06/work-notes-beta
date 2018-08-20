import React from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles'



const NoteList = (props) => {

  
  console.log('cat list props', props.notes)
  
  return (  
    <ul>
      <S.Text>{props.notes.map(Note => <li key={Note._id}>
      Title: 
        {Note.name} <br /> 
      Note Text: 
        <S.Section>{Note.content}</S.Section>
      <br />
      
      <S.Button note={Note} onClick={() => props.deleteNote(Note)} >Remove Note</S.Button>
        </li>)}
        </S.Text>
      
    </ul>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
}



export default NoteList;