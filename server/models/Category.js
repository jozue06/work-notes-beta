'use strict';

import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {type: String},
    budget: {type: String},
    id: {type: String},
    timestamp: {type: String},
});




export default mongoose.model('category', categorySchema);
