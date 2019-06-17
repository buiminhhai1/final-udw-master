

exports.index = function(req, res, next) {
    res.render('customer/index', { title: 'Express' });
};

exports.mobile = function(req, res, next) {
    res.render('customer/product/mobile', { title: 'Express' }); 
};
exports.camera = function(req, res, next) {
    res.render('customer/product/camera', { title: 'Express' });
};
exports.laptop = function(req, res, next) {
    res.render('customer/product/laptop', { title: 'Express' });
};
exports.tivi = function(req, res, next) {
    res.render('customer/product/tivi', { title: 'Express' });
};

exports.products = function(req, res, next) {
    res.render('customer/products', { title: 'Express' });
};

exports.productdetail = function(req, res, next) {
    res.render('customer/product_details', { title: 'Express' });
};

