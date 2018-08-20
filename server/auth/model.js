'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

// Before we save, hash the plain text password
userSchema.pre('save', function(next) {
  bcrypt.hash(this.password,10)
    .then(hashedPassword => {
      // Update the password for this instance to the hashed version
      this.password = hashedPassword;
      // Continue on (actually do the save)
      next();
    })
    // In the event of an error, do not save, but throw it instead
    .catch( error => {throw error;} );
});

// If we got a user/password, compare them to the hashed password
// return the user instance or an error
userSchema.statics.authenticate = function(auth) {
  let query = {username:auth.username};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(error => error);
};

userSchema.statics.authorize = function(token) {
  let parsedToken = jwt.verify(token, process.env.SECRET || 'changeit');
  let query = {_id:parsedToken.id};
  return this.findOne(query)
    .then(user => {
      // looked up their role and then all capabilities
      return user;
    })
    .catch(error => error);
};

// Compare a plain text password against the hashed one we have saved
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

// Generate a JWT from the user id and a secret
userSchema.methods.generateToken = function() {
  return jwt.sign( {id:this._id}, process.env.SECRET);
};

export default mongoose.model('users', userSchema);
