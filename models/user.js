'use strict';

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    // _id: Schema.Types.ObjectId,
    username: {type: String, required: true},
    password: {type: String, required: true },
    email: {type: String, required: true},
    note: {type:mongoose.Schema.Types.ObjectId, ref: 'note' },
});




export default mongoose.model('user', userSchema);
