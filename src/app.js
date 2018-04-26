const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const authController = require('./controllers/auth');

if (process.env.NODE_ENV !== 'production') require('dotenv').load();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());

app.disable('x-powered-by');

// ROUTES

app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
//app.use('/games', require('./routes/games'));
//app.use('/characters', require('./routes/characters'));
app.use('/posts', require('./routes/posts'));
//app.use('/tags', require('./routes/tags'));

//////////////////////////////////////////////////////////////////////////////
// example routes, not part of an organized application
//////////////////////////////////////////////////////////////////////////////

app.get('/protected',
        authController.isAuthenticated,
        function(req, res, next){ res.send({ id: req.claim.id, message: "For authenticated eyes only" }) })

app.get('/protected/:userId',
        authController.isAuthenticated,
        authController.isSelf,
        function(req, res, next){ res.send({ id: req.claim.id, message: "For your eyes only"}) })


// DEFAULT ROUTE

app.use((req, res, next) => {
  next({status: 404, message: 'Route not found' });
})

// ERROR HANDLING

app.use((err, req, res, next) => {
  const errorMessage = {};

  if (process.env.NODE_ENV !== 'production' && err.stack) {
    errorMessage.stack = err.stack;
  }

  errorMessage.status = err.status || 500;
  errorMessage.message = err.message || 'Internal Server Error';

  res.status(errorMessage.status).send(errorMessage);
})

// START SERVER

const port = process.env.PORT || 3000;
const listener = () => console.log(`Listening on port ${port}! 🐽`);
app.listen(port, listener);
