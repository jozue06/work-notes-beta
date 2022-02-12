'use strict';

import { config } from "dotenv";
import pkg from 'mongoose';
import { start, stop } from "./server.js";

const { connect } = pkg;

config();
connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))

const port = process.env.PORT || 3300;

start(port)

