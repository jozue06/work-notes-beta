'use strict';

import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    name: {type: String},
    content: {type: String },
    id: {type: String},
    timestamp: {type: String},
});




export default mongoose.model('note', noteSchema);
