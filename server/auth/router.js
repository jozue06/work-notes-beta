'use strict';

import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';
import errorBadReq from '../middleware/errorBadReq.js';


authRouter.post('/api/signup', (req, res, next) => {
  if(!Object.keys(req.body).length) {
    errorBadReq(res);
  }
  let user = new User(req.body);
  user.save()
    .then( user => { 
      res.send(user.generateToken());
    })
    .catch(next);
});


authRouter.get('/api/signin',auth, (req, res, next) => {
  res.cookie('Token', req.token);
  res.send(req.token);
});

authRouter.get('/api/showMeTheMoney', auth, (req,res,next) => {
  res.send('Here is all the ca$h');
});

authRouter.delete('/api/free', auth, (req,res) => {
  res.send('thanks for deleting');
});

authRouter.get('/api/free', auth, (req,res) => {
  // check to ensure that bearer auth is present. if not, no access.
  // call model methods here for specific task of route.
  // add email. add userId to schema of model to reference.
  if(req.token){
    res.send('no way jose');
  }
  res.send('Here is all the ca$h');
});

authRouter.put('/api/freePut', auth, (req,res) => {
  res.send('thanks for putting');
});


export default authRouter;