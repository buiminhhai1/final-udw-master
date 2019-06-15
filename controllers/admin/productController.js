var Mobile = require('../../models/admin/mobile');
// product


exports.products =function(req, res, next) {

Mobile.find().exec(function(err,mobile){
	res.render('admin/products', { title: 'Express',products : mobile});
});
    
};

exports.productdetail = function(req, res, next) {
    res.render('admin/productdetail', { title: 'Express' });
};
