var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var customerRouter = require('./routes/customer');
var adminRouter = require('./routes/admin');
var app = express();

var uri = "mongodb+srv://thanhhai430:thanhhai430@cluster0-onyhg.mongodb.net/WebDB";
mongoose.connect(uri, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected");
});
 
// db.collection("DonHang").insertOne({
// 	MaDonHang: 'DH',
//     Owner: 'NguyenVanH',
//     CMND: 'String',
//     NgayMua: 'String',
//     TongTien: 'String'
    
// }, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', customerRouter);
app.use('/admin', adminRouter);

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
  res.render('customer/error');
});

module.exports = app;