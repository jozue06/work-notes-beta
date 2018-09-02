import superagent from 'superagent';
import defaultState from './defaultState';

// Action type
export const GET = 'Note/GET';
export const ADD = 'Note/ADD';
export const DELETE = 'Note/DELETE';
export const UPDATE = 'Note/UPDATE';

const ENV = {};

ENV.apiUrl = 'https://work-notes.herokuapp.com';
// ENV.apiUrl = 'http://localhost:3300';

// Reducer
export default function reducer(state = defaultState, action) {

  
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return {
        ...state,
        notes: [...state.notes, payload],
        isLoading: false,
      };
      case DELETE:
      return {
        ...state,
        notes: state.notes.filter(note => {
          return note._id !== payload._id}),
          isLoading: false,
      };

      case GET:
      return ({
        ...state,
       notes: action.payload,
       isLoading: false,
      });
      
      case UPDATE:
      return ({  
        ...state,
      notes: state.notes.map(note => note._id === payload._id ? payload : note),
      isLoading: false,
      });
      
    default: return state;
  }
}


// Action Creators
export const addNote = (note) => dispatch => {
  console.log('note', note)
  superagent.post(`${ENV.apiUrl}/api/notes`, note)
  .then(res => 
    dispatch({
    type: ADD,
    payload: res.body,
  }))
}

export const deleteNote = (note) => dispatch => {
  let id = note._id
  superagent.delete(`${ENV.apiUrl}/api/notes/${id}`)
  .then(dispatch({
    type: DELETE,
    payload: note
  }));
 
}

export const getNotes = () => dispatch => {
  superagent
  .get(`${ENV.apiUrl}/api/notes`)
  .then(res => 
   dispatch({
    type: GET,
    payload: res.body
  }))

}

export const updateNote = (note) => dispatch => { 
  let noteObj = {
    name: note.name,
    content: note.content
  }
  superagent.put(`${ENV.apiUrl}/api/notes/${note.id}`, noteObj)
  .then(res => dispatch({
    type: UPDATE,
    payload: res.body.note
  }))
}
