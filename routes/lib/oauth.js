'use strict';

import superagent from 'superagent';

import User from '../model';

// This is currently setup for Google, but we could easily swap it out
// for any other provider or even use a totally different module to
// to do this work.
//
// So long as the method is called "authorize" and we get the request,
// we should be able to roll on our own here...

const authorize = (req) => {

  let code = req.query.code;

  console.log('(1) code', code);

  // exchange the code or a token


  // var request = require("request");

  var options = { method: 'POST',
    url: 'https://josh-james.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id":"R9BOgY7UTAEOksopBVpboUK3cDziwX4l","client_secret":"bTluRpIungeTvCs5n-R-j7pdl4ohoSiLZ4ZM_bdyjWXlHmuL2smAVrnJQXyj7cGC","audience":"https://josh-james.auth0.com/api/v2/","grant_type":"client_credentials"}' };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
  return superagent.post('https://josh-james.auth0.com/oauth/token')
    .type('form')
    .send({
      code: code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.API_URL}/oauth`,
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
      console.log('(4) Creating Account');
      return User.createFromOAuth(googleUser);
    })
    .then (user => {
      console.log('(5) Created User, generating token');
      return user.generateToken();
    })
    .catch(error=>error);
};



export default {authorize};