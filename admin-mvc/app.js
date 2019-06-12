var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userlistRouter = require('./controllers/userlist');
var userdetailRouter = require('./controllers/userdetail');
var orderRouter = require('./controllers/order');
var orderdetailRouter = require('./controllers/orderdetail');
var productRouter = require('./controllers/product');
var productdetailRouter = require ('./controllers/productdetail');
var salesconfigureRouter = require ('./controllers/salesfigure');
var top10Router = require ('./controllers/top10');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/',userlistRouter);
app.use('/',userdetailRouter);
app.use('/',orderRouter);
app.use('/',orderdetailRouter);
app.use('/',productRouter);
app.use('/', productdetailRouter);
app.use('/',salesconfigureRouter);
app.use('/',top10Router);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
