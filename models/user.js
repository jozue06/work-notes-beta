'use strict';

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, required},
    password: {type: String, required },
    email: {type: String, required},
});




export default mongoose.model('user', userSchema);
