
// top10
exports.login = function(req, res, next) {
    res.render('customer/login', { title: 'Express' });
};


// top10
exports.register = function(req, res, next) {
    res.render('customer/register', { title: 'Express' });
};


// top10
exports.forgetpass = function(req, res, next) {
    res.render('customer/forgetpass', { title: 'Express' });
};
