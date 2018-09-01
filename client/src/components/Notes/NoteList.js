import React from 'react';
import PropTypes from 'prop-types';
import S from '../styles/styles'
import NoteForm from './NoteForm'

export default class NoteList extends React.Component {
  
  constructor(props){
    super(props);
  }
  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState({ editing: true }, () => console.log('sthate 1', this.props))
  }

  render(){
  return (  
    <ul>
      <S.Text onDoubleClick={this.handleEdit}>{this.props.notes.map(Note => <li key={Note._id}>
      Title: 
        {Note.name} <br /> 
      Note Text: 
        <S.Section>{Note.content}</S.Section>
      <br />
      
      <S.Button note={Note} onClick={() => this.props.deleteNote(Note)}>Remove Note</S.Button>
     {this.state.editing && 
      <NoteForm
      // key={Note._id}
      // note={Note}
      // onUpdate={this.props.updateNote}
     

      buttonText="upda"
      name={Note.name}
     content={Note.content} />}
      <S.Button note={Note} onClick={() => this.props.updateNote(Note)}>update Note</S.Button></li>)}
        </S.Text>
        
    </ul>
  );
};
}
NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

