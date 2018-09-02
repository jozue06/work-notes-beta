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
    this.setState({ editing: this.state.id === id ? !this.state.editing : true, id: id })
  }

  render() {
    return (
      <ul>

        {this.props.notes.sort(function(x,y){
          console.log('whww', (y.timeStamp - x.timeStamp))
          return y.timeStamp - x.timeStamp
        })
        .map(Note => <S.List onDoubleClick={() => this.handleEdit(Note._id)} key={Note._id}>

         <S.Title>
           Title:
           <br />
        {Note.name} 
        </S.Title> 
        <br />
         <S.Text>
           <br />
        {Note.content}
        </S.Text>
          <br />
          <S.Tiny>** Double Click To Edit Note **</S.Tiny>
          <S.Button note={Note} onClick={() => this.props.deleteNote(Note)}>Remove Note</S.Button>

          {this.state.editing && this.state.id === Note._id &&

            <NoteForm
              key={Note._id}
              note={Note}
              onComplete={this.props.updateNote}
              id={Note._id}
              buttonText="Update Note"
              name={Note.name}  
              content={Note.content}
            />}

        </S.List>)}
      </ul>
    );
  };
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
}
