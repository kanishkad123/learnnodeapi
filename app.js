var express = require('express');
var app = express();
var cors = require('cors');
var db = require('./db');

app.use(cors({'Origin':'*','allowedHeaders':'Content-Type'}));
var UserController = require('./user/UserController');
app.use('/users', UserController);


var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

var InstrumentController = require('./jobRelated/instruments/instrumentsController');
app.use('/api/instruments',InstrumentController);

var GenericJobController = require('./jobRelated/genericJob/genericJobController');
app.use('/api/genericjob',GenericJobController);

module.exports = app;