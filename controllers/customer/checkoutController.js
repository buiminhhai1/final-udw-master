
// top10
exports.payment = function(req, res, next) {
    res.render('customer/payment', { title: 'Express' });
};


// top10
exports.productsummary = function(req, res, next) {
    res.render('customer/productsummary', { title: 'Express' });
};


// top10
exports.shipping = function(req, res, next) {
    res.render('customer/shipping', { title: 'Express' });
};
