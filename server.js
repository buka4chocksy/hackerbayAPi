var express = require('express');
var app = express()
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('dotenv').config();
var userRouter = require('./routes/userRoutes');
var cors = require('cors');
var logger = require('logger');
//middleware

app.use(logger())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(cookieParser());
app.use(bodyParser.json({}));
app.use(cors());
app.use('/user',userRouter)
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;