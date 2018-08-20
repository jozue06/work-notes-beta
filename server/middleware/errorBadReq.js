'use strict';

// Custom Error Handler because we always want to return a JSON response
export default (res) => {
  res.statusCode = 401;
  res.statusMessage = 'bad request';
  res.setHeader('Content-Type', 'application/json');
  res.end();
};