var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardsRouter = require('./routes/boards.js');
var authenticationRouter = require('./routes/authentication.js');

// communication to the frontend
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

require('dotenv').config();
require('./database-connection.js');
var app = express();

// requires the model with Passport-Local Mongoose plugged in
const User = require('./model/authUser');
const passport = require('passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

let connectionPromise = mongoose.connection
  .asPromise()
  .then(connection => (connectionPromise = connection.getClient()));

app.use(
  cors({
    // specific rules for security, also mandatory once u use withCredentials in the frontend
    origin: process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL : 'http://localhost:5173',
    credentials: true,
  })
);
const sessionMiddleware = session({
  secret: 'SuperSecureSecretNobodyKnows', // is required to enrcypt your session specifically to you like
  resave: false, // Forces the session to be saved back to the session store, even if the session was never modified
  saveUninitialized: true,
  cookie: {
    secure: process.env.ENVIRONMENT === 'production',
    httpOnly: process.env.ENVIRONMENT === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 14, // how long the cookie is valid in ms
  },
  store: MongoStore.create({
    clientPromise: connectionPromise,
    stringify: false,
  }),
});

app.use(sessionMiddleware);

passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// intercept any http request to the backend
app.use((req, res, next) => {
  const numberOfVisits = req.session.numberOfVisits || 0;
  req.session.numberOfVisits = numberOfVisits + 1;
  req.session.blubb = 'blubb';
  req.session.history = req.session.history || [];
  req.session.history.push(req.url);
  req.session.ip = req.ip;
  req.session.userName = 'Hans';

  const io = app.get('socketio');

  if (io && req.session && req.session.passport) {
    console.log('Emitting to user', req.session.passport.user);
    io.to(req.session.passport.user).emit('numberOfVisits', req.session.numberOfVisits);
  }

  console.log('Show me my request:', req.session);

  next();
});

app.use(passport.session());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/authentication', authenticationRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.createSocketServer = function (server) {
  const io = require('socket.io')(server, {
    cors: {
      origin: 'http://localhost:5173',
      credentials: true,
    },
  });

  app.set('socketio', io);

  console.log('Socket wrapper initialized');

  io.engine.use(sessionMiddleware);
  io.engine.use(passport.session());

  io.on('connection', socket => {
    console.log('a user connected');

    const session = socket.request.session;
    console.log('Socket session', session);

    // gives each user an own socket connection bound to this room
    if (session.passport && session.passport.user) {
      console.log('Socket joins room', session.passport.user);
      socket.join(session.passport.user);
    }

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    setInterval(() => {
      socket.emit('time', new Date().toTimeString().slice(0, 8));
    }, 1000);

    socket.on('watch', stockName => {
      console.log(session.passport.user + ' wants to watch', stockName);
      socket.join(stockName);
    });

    socket.on('unwatch', stockName => {
      console.log(session.passport.user + ' wants to unwatch', stockName);
      socket.leave(stockName);
    });

    setInterval(() => {
      socket.to('bitcoin').emit('bitcoin', Math.random() * 100000);
    }, 1000);

    setInterval(() => {
      socket.to('eur').emit('eur', Math.random() * 1);
    }, 1000);
  });
};

console.log(`NODE_ENV is ${process.env.NODE_ENV} with FRONTEND_URL ${process.env.FRONTEND_URL}`);

module.exports = app;
