module.exports = {
  ensureAuthenticated: function(req, res, next) {
    console.log('ensureAuthenticated');
    if (req.isAuthenticated()) {
      return next();
    }
    console.log('go ensureAuthenticated');
    req.flash('error_msg', 'Vui lòng đăng nhập');
    res.redirect('/auth/login');
  },
  forwardAuthenticated: function(req, res, next) {
    console.log('in forwardAuthenticated');
    if (!req.isAuthenticated()) {
      console.log('next forwardAuthenticated');
      return next();
    }

    // console.log('go forwardAuthenticated');
    // res.redirect('/auth/login');   
    res.redirect('/');   
  }
};


