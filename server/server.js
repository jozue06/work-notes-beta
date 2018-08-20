'use strict';

require('dotenv').config();

require('babel-register');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))

require('./src/app.js').start(process.env.PORT);