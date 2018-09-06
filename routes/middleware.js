'use strict';

import User from './model.js';

export default (req, res, next) => {
 
  
  let authorize = (token) => {
   
    // Given a token, check with the User model to see if its valid
    User.authorize(token)
      .then(user => {
        if(!user) { getAuth(); }
        else {
          req.token=token;
          next();
        }
      })
      .catch(next);
  };

  let authenticate = (auth) => {
    // Validate the user using the model's authenticate method
    User.authenticate(auth)
      .then(user => {
        // If it's null, go to getAuth() ... which should return an error or a login page
        if (!user) { getAuth(); }
        // We must have a good user.  Generate a token and jack that onto the req object and move on
        // we could alternatively put the whole user instance on req.user if there's need for it later?
        else {
          
          req.token = user.generateToken();
          next();
        }
      })
    // Send any errors to next() which will invoke the error handling middleware
      .catch(next);

  };

  // If we're not authenticated either show an error or pop a window
  let getAuth = () => {
    // res.set({
    //   'WWW-Authenticate': 'Basic realm="Super Secret Area"'
    // }).send(401);

    // Send back a JSON formatted error object through our middleware
    next({status:401, statusMessage:'Unauthorized',message:'Invalid User ID/Password'});
  };

  // Try to authenticate -- parse out the headers and do some work!
  try {
    let auth = {};
    let authHeader = req.headers.authorization;

    // if(!authHeader) {
    //   return getAuth();
    // }

    // BASIC Auth
    if(authHeader.match(/basic/i)) {
      let base64Header = authHeader.replace(/Basic\s+/i, ''); 
      let base64Buffer = Buffer.from(base64Header,'base64'); 
      let bufferString = base64Buffer.toString(); 
      let [username,password] = bufferString.split(':');  
      auth = {username,password};
      authenticate(auth);
    }
    else if(authHeader.match(/bearer/i)) {
      let token = authHeader.replace(/bearer\s+/i, '');
      authorize(token);
    }
  } catch(e) {
    next(e);
  }

};