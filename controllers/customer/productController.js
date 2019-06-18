var Product = require('../../models/product');
// product





exports.index = function(req, res, next) {
   Product.find({}).exec(function(err,data){
		console.log(data);
	res.render('customer/index', { title: 'Express',data: data });
});
};

exports.mobile = function(req, res, next) {
	Product.find({IdCategory : 'Mobile'}).exec(function(err,data){
		console.log(data);
	res.render('customer/product/mobile', { title: 'Express',data: data });
});


     
};
exports.camera = function(req, res, next) {
<<<<<<< HEAD
    res.render('customer/product/camera', { title: 'Express' });
};
=======
    Product.find({IdCategory : 'Máy ảnh'}).exec(function(err,data){
		console.log(data);
	res.render('customer/product/camera', { title: 'Express',data: data });
});
}

>>>>>>> 95aff43c1a46fa4466159db0dacb0ae6860400c4
exports.laptop = function(req, res, next) {
    Product.find({IdCategory : 'Laptop'}).exec(function(err,data){
		console.log(data);
	res.render('customer/product/laptop', { title: 'Express',data: data });});
}

exports.tivi = function(req, res, next) {
    Product.find({IdCategory : 'Tivi'}).exec(function(err,data){
		console.log(data);
	res.render('customer/product/tivi', { title: 'Express',data: data });
})}

exports.product = function(req, res, next) {
    res.render('customer/product/product', { title: 'Express' });
};

<<<<<<< HEAD
exports.productdetail = function(req, res, next) {
    res.render('customer/product/productdetail', { title: 'Express' });
=======
exports.product_details = function(req, res, next) {
    res.render('customer/products', { title: 'Express' });
};

exports.detail = function(req, res, next) {
    Product.findOne({_id : req.params.id}).exec(function(err,data){
		console.log(data);
	res.render('customer/product_details', { title: 'Express',data: data });});
>>>>>>> 95aff43c1a46fa4466159db0dacb0ae6860400c4
};

