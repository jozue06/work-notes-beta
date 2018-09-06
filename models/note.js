'use strict';

import mongoose from 'mongoose';
import user from './user.js'

const noteSchema = new mongoose.Schema({
    name: {type: String},
    content: {type: String },
    id: {type: String},
    timeStamp: {type: String},
    user: {type:mongoose.Schema.Types.ObjectId, ref: 'user' },
    
});




export default mongoose.model('note', noteSchema);
