import superagent from 'superagent';
import defaultState from './defaultState';

// Action type
export const GET = 'Note/GET'
export const ADD = 'Note/ADD';
export const DELETE = 'Note/DELETE';

const ENV = {};

ENV.isProduction = window.location.href.includes('work-notes');

ENV.productionApiUrl = 'https://work-notes.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3300';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

// Reducer
export default function reducer(state = defaultState, action) {

  console.log({action});
  
  const { type, payload } = action;

  switch (type) {
    case ADD:
      // payload.id = uuid(); // this ok or need fresh copy?
      return {
        ...state,
        notes: [...state.notes, payload]
      };
      case DELETE:
      return {
        ...state,
        notes: state.notes.filter(note => {
          console.log('payss', payload)
          return note._id !== payload._id})
      };

      case GET:
      console.log('action reducer get', state)
      return ({
        ...state,
       notes: action.payload
      });
      
    default: return state;
  }
}


// Action Creators
export const addNote = (note) => dispatch => {
  console.log('addNote action', note);
  superagent.post(`${ENV.apiUrl}/api/notes`, note)
  .then(res => dispatch({
    type: ADD,
    payload: res.body
  })
)

  
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
console.log('calling getNotes')
  superagent
  .get(`${ENV.apiUrl}/api/notes`)
  .then(res =>
  dispatch({
    type: GET,
    payload: res.body
  }))

}