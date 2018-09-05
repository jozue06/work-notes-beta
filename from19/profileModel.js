

import mongoose, {Schema} from 'mongoose';

const schema = new mongoose.Schema({
  ETag : String,
  username: {type: Schema.Types.ObjectId, ref: 'users' },

});

module.exports = mongoose.model('Profile', schema);