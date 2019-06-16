var express = require('express');
var router = express.Router();


const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const bcrypt = require('bcrypt');
const passport = require('passport');
// Load User model
const User = require('../models/User');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('admin/login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('admin/register',
	{ title: 'Express', errors : []}));

// Register
router.post('/register', (req, res) => {
  const [ name, email, password, password2 ] = [req.body.name , req.body.email,req.body.password1,req.body.password2];
  var errors = [];

   console.log(req.body);
   console.log(errors.length);

   console.log(name);
     

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Vui lòng nhập đầy đủ thông tin' });
  }

  if (password != password2) {
    errors.push({ msg: 'Mật khẩu không trùng khớp' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Mật khẩu phải từ 6 kí tự trở lên' });
  }

  if (errors.length > 0) {
    console.log(errors);
    res.render('admin/register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email đã tồn tại. Vui lòng nhập email khác' });
        res.render('admin/register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'Bạn đã đăng kí và có thể đăng nhập'
                );
                res.redirect('/auth/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
});


module.exports = router;
