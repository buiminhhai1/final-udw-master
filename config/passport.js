const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Load User model
// const Account = require('../models/account');
const Account = require('../models/account');
module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      console.log(email);
      // Match user
      Account.findOne({
        email: email
      }).then(account => {
        if (!account) {
          return done(null, false, { message: 'Email chưa được đăng ký' });
        }

        // Match password
        bcrypt.compare(password, account.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, account);
          } else {
            return done(null, false, { message: 'Mật khẩu không đúng' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(account, done) {
    done(null, account.id);
  });

  passport.deserializeUser(function(id, done) {
    Account.findById(id, function(err, account) {
      done(err, account);
    });
  });
};



