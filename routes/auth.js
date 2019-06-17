var express = require('express');
var router = express.Router();


const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const bcrypt = require('bcrypt');
const passport = require('passport');
// Load User model
const Account = require('../models/account');
const User = require('../models/user');


// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('admin/login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('admin/register',
	{ title: 'Express', errors : []}));

// Register
router.post('/register', (req, res) => {
  const a = [ name, email, password, password2,gender,birthday,phone,moreinfo,address ] = 
  [req.body.name , req.body.email,req.body.password1,req.body.password2,
  req.body.gender,req.body.birthday,req.body.phonenumber,req.body.moreinfo,req.body.address];
  var errors = [];

   console.log(req.body);
   console.log(a);

   console.log(name);
     

  if (!name || !email || !password || !password2 || !gender || !birthday || !phone ||!address) {
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
      data: req.body
    });
  } else {
    Account.findOne({ email: email }).then(account => {
      if (account) {
        errors.push({ msg: 'Email đã tồn tại. Vui lòng nhập email khác' });
        res.render('admin/register', {
          errors,
          data : req.body
        });
      } else {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy; 


        const newUser = new User({
          DisplayName : name,
          ImageAvatar :' ',
          Gender : gender,
          DateOfBirth: birthday,
          Phone :phone,
          Email : email,
          Address: address,
          DateContact: today,
          MoreInfo :moreinfo,
          Role : '0'});


        const newAccount = new Account({
          idUser : newUser._id,
          email,
          password,
          verified : 'false'
        })


        console.log(newUser);
        console.log(newAccount);

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newAccount.password, salt, (err, hash) => {
            if (err) throw err;
            newAccount.password = hash;
            newAccount
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'Bạn đã đăng kí và có thể đăng nhập'
                );

            newUser.save(function(err,d){
                    if(err){console.log(err)}
                       else{
                          console.log("create user successfully");
                           }
                      })
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
    failureRedirect: '/auth/login',
    failureFlash: true
  })(req, res, next);
});



  



module.exports = router;
