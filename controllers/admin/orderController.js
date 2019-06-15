var Order = require('../../models/admin/order');
// product
// orders
exports.orders = function(req, res, next) {
    Order.find().exec(function(err,data){
	res.render('admin/orders', { title: 'Express',orders : data});
});
};

exports.orderdetail = function(req, res, next) {
    Order.findOne({_id :req.params.id}).exec(function(err,data){
	res.render('admin/orderdetail', { title: 'Express',order : data});
	});
};
