var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var customerRouter = require('./routes/customer');
var adminRouter = require('./routes/admin');
var authRouter = require('./routes/auth');
var app = express();
var router = express.Router();
var expressSession = require('express-session');
var bodyParser = require('body-parser');	
const passport = require('passport');
require('./config/passport')(passport);
const { ensureAuthenticated, forwardAuthenticated } = require('./config/auth');

app.use(expressSession(
	{secret: 'keyboard cat',
	resave: true,
    saveUninitialized: true,cookie: {maxAge: 1000 * 60 * 20}}));



app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


var uri = "mongodb+srv://thanhhai430:thanhhai430@cluster0-onyhg.mongodb.net/WebDB";
mongoose.connect(uri, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected");
});



// app.use(function(req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   next();
// });

 
// const mailgun = require("mailgun-js");
// const DOMAIN = "sandboxa722557c5c5847d0a694b91f3e7d6e2e.mailgun.org";
// const mg = mailgun({apiKey: "b5ad380a8bd261d0aa3b5b51cbb4639a-16ffd509-467d3ba4", domain: DOMAIN});
// const data = {
// 	from: "Shopping <postmaster@shopping.mailgun.org>",
// 	to: "caothanhhai430@gmail.com",
// 	subject: "Hello",
// 	text: "Testing some Mailgun awesomness!"
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });

 
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

app.use('/auth',forwardAuthenticated,authRouter);
app.use('/admin',ensureAuthenticated,adminRouter);

app.use('/', customerRouter);
// app.use('/admin', adminRouter);

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
