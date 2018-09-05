'use strict';

import superagent from 'superagent';
import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';

// Generally, these will send a Token Cookie and do a redirect.
// For now, just spew out the token to prove we're ok.

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( user => res.send(user.generateToken()) )
    .catch(next);
});

authRouter.get('/signin',auth, (req, res, next) => {
  res.cookie('Token', req.token);
  res.send(req.token);
});

authRouter.get('/oauth/google/code', (req, res, next) => {

  let URL = process.env.CLIENT_URL;
  let code = req.query.code;

  console.log('(1) code', code);

  // exchange the code or a token
  superagent.post('https://www.googleapis.com/oauth2/v4/token')
    .type('form')
    .send({
      code: code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.API_URL}/oauth/google/code`,
      grant_type: 'authorization_code',
    })
    .then( response => {
      let googleToken = response.body.access_token;
      console.log('(2) google token', googleToken);
      return googleToken;
    })
  // use the token to get a user
    .then ( token => {
      return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
        .set('Authorization', `Bearer ${token}`)
        .then (response => {
          let user = response.body;
          console.log('(3) Google User', user);
          return user;
        });
    })
    .then(googleUser => {
      return User.createFromOAuth(googleUser);
    })
    .then ( user => {
      return user.generateToken();
    })
    .then ( token => {
      res.cookie('Token', token);
      res.redirect(URL);
    })
    .catch( error => {
      console.log('ERROR', error.message);
      next(error);
      // res.redirect(URL);
    });

});

authRouter.get('/showMeTheMoney', auth, (req,res,next) => {
  res.send('Here is all the ca$h');
});

export default authRouter;