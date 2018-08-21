'use strict';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import notes from './routes/api/notes.js';


let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());  
app.use(express.urlencoded({extended:true})); 


app.use('/api/notes', notes);


app.use(express.static('client/build'))
app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))

})


let server = false;

module.exports = {
  start: (port) => {
    if(!server) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log('Server running on', port);
      });
    }
    else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    server.close( () => {
      console.log('Server is now off');
    });
  },
};