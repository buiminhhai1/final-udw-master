var Mobile = require('../models/mobile');
// product


exports.products =function(req, res, next) {

Mobile.find().exec(function(err,mobile){
	res.render('products', { title: 'Express',products : mobile});
});
    
};

exports.productdetail = function(req, res, next) {
    res.render('productdetail', { title: 'Express' });
};
