const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());

app.disable('x-powered-by');

app.use(parser.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

const routes = require('./src/routes/posts');
app.use('/posts', routes);

app.use((req, res, next) => {
  next({status: 404, message: 'Route not found' });
})

app.use((err, req, res, next) => {
  const errorMessage = {};

  if (process.env.NODE_ENV !== 'production' && err.stack) {
    errorMessage.stack = err.stack;
  }

  errorMessage.status = err.status || 500;
  errorMessage.message = err.message || 'Internal Server Error';

  res.status(errorMessage.status).send(errorMessage);
})

const listener = () => console.log(`Listening on port ${port}! 🐽`);
app.listen(port, listener);
