import React from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote, getNotes, updateNote} from '../../reducers/notes';

import NoteForm from './NoteForm';
import NoteList from './NoteList';



class NotesContainer extends React.Component{
  
  componentDidMount(){
   this.props.getNotes();
    }


  render(){
  return (
    <section>
      <h2>Notes</h2>
      <NoteForm buttonText="Add Note" onComplete={this.props.addNote}  />
      <NoteList notes={this.props.notes} note deleteNote={this.props.deleteNote} onComplete={this.props.updateNote} />
    </section>
  );
};

}
const mapStateToProps = (state) => ({ notes : state.notesState.notes });
const mapDispatchToProps = (dispatch) => ({
  addNote: note => dispatch(addNote(note)),
  getNotes: note => dispatch(getNotes(note)),
  deleteNote: note => dispatch(deleteNote(note)),
  updateNote: note => dispatch(updateNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);