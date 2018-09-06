import superagent from 'superagent';

// Action type

// const authUrl = 'https://josh-17.herokuapp.com';
const authUrl = 'http://localhost:3300';


export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Reducer
  let initialState = false;

  export default (state = initialState, action) => {
  
    let {type, payload} = action;
  
    switch(type) {
      case LOGIN: return payload;
      case LOGOUT: return payload;
      default: return state;
    }
  
  };

  //action creators
  
  export const logIn = () => ({
    type: LOGIN,
    payload: true,
  });
  
  export const logOut = () => ({
    type: LOGOUT,
    payload: false,
  });
  
  
  //thunkers
  
  export const loginReq = (user) => {
    return dispatch => {
      
      superagent.get(`${authUrl}/auth/signin`)
        .auth(user.username, user.password)
        .then(res => {
          let token = res.text
          localStorage.setItem('token', token);
          dispatch(logIn());
        })
    };
  };

    
  export const loginAuth = (token) => {
    return dispatch => {
      
      superagent.get(`${authUrl}/auth/signin`)
        .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})
        .then(res => {
          let token = res.text
          localStorage.setItem('token', token);
          dispatch(logIn());
        })
    };
  };
  
  export const logoutReq = () => {
    return dispatch => {
      localStorage.removeItem('token');
      dispatch(logOut());
    };
  };
  
  export const signupReq = (newUser) => {
    return dispatch => {
      superagent.post(`${authUrl}/auth/signup`)
        .send(newUser)
        .then(res => {
          let token = res.text
          localStorage.setItem('token', token)
          dispatch(logIn());
        })
    };
  };