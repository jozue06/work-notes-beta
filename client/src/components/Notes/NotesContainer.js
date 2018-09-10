import React from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote, getNotes, updateNote } from '../../reducers/notes';

import NoteForm from './NoteForm';
import NoteList from './NoteList';
import Card from '../Card'
import S from '../styles/styles'
import Loader from '../Loader.js'

class NotesContainer extends React.Component{

  componentWillMount() { 
  this.props.getNotes()
    }


  render(){
  return (
    <section> 
      <Card />
      <S.Title>Notes</S.Title>
      <NoteForm buttonText="Add Note" onComplete={this.props.addNote} isLoading={this.props.isLoading} />
      {this.props.isLoading ? <Loader loading={this.props.isLoading}/> : null }
      <NoteList notes={this.props.notes} note deleteNote={this.props.deleteNote} updateNote={this.props.updateNote}  />
    </section>
  );
};

}
const mapStateToProps = (state) => ({ 
  isLoading: state.notesState.isLoading,
  notes : state.notesState.notes 
});

const mapDispatchToProps = (dispatch) => ({
  addNote: note => dispatch(addNote(note)),
  getNotes: note => dispatch(getNotes(note)),
  deleteNote: note => dispatch(deleteNote(note)),
  updateNote: note => dispatch(updateNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);