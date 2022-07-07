var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const store = require('./lib/session-store');

// router imports
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// configure express app
var app = express();

// add middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// configure sequelize sessions
app.use(
  session({
    secret: 'pancakes',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

// load react client build files in production
app.use(express.static(path.join(__dirname, 'client/build')));

// api routes
app.use('/api/v1', indexRouter);
app.use('/api/v1/users', usersRouter);

// redirect all other routes to react client so that react-router can handle them
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

module.exports = app;
