

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

exports.product = function(req, res, next) {
    res.render('customer/product/product', { title: 'Express' });
};

exports.productdetail = function(req, res, next) {
    res.render('customer/product/productdetail', { title: 'Express' });
};

