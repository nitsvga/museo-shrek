var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./models");
var config = require("./config/config");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var personajesRouter = require('./routes/personajes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/personajes', personajesRouter);

module.exports = app;