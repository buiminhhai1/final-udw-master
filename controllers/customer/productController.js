
// top10
exports.products = function(req, res, next) {
    res.render('customer/products', { title: 'Express' });
};


// top10
exports.productdetail = function(req, res, next) {
    res.render('customer/product_details', { title: 'Express' });
};

