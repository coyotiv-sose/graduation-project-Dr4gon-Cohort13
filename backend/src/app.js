var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const MongoStore = require('connect-mongo');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardsRouter = require('./routes/boards.js');
const cors = require('cors');

require('dotenv').config();
require('./database-connection.js');
var app = express();

const mongoose = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

let connectionPromise = mongoose.connection
  .asPromise()
  .then(connection => (connectionPromise = connection.getClient()));

app.use(
  session({
    secret: 'awdawd', // usually in .env or beyond on system level
    resave: false, // store the the session every time, regardless of modification
    saveUninitialized: true, // A session is uninitialized when it is new but not modified
    store: MongoStore.create({ clientPromise: connectionPromise, stringify: false }),
    cookie: {
      secure: process.env.NODE_ENV === 'production', // only set cookies over https. Server will not send back a cookie over http.
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year // expiration date
      httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
    },
  })
);

const AuthUser = require('./authUser');
const passport = require('passport');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(AuthUser.createStrategy());

passport.serializeUser(AuthUser.serializeUser());
passport.deserializeUser(AuthUser.deserializeUser());

app.use(passport.session());

app.use((req, res, next) => {
  const numberOfVisits = req.session.numberOfVisits || 0;
  req.session.numberOfVisits = numberOfVisits + 1;
  req.session.history = req.session.history || [];
  req.session.history.push(req.url);
  req.session.ip = req.ip;

  console.log('session', req.session);

  next();
});

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/authUsers', require('./routes/authUsers'));

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

console.log('blubb');

module.exports = app;
