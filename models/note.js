'use strict';

import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    name: {type: String},
    content: {type: String },
    id: {type: String},
    timeStamp: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'user' },
});




export default mongoose.model('note', noteSchema);
