var Order = require('../../models/order');
// product
// orders
exports.orders = function(req, res, next) {
    Order.find().exec(function(err,data){
	res.render('admin/order/orders', { title: 'Express',orders: data});
});
};

exports.orderdetail = function(req, res, next) {
    Order.findOne({_id :req.params.id}).exec(function(err,data){
	res.render('admin/order/orderdetail', { title: 'Express',order : data});
	});
};

exports.postorderlist = function(req, res, next) {
	if(req.body.id){
	Order.findOne({_id :req.body.id}).exec(function(err,data){
		// console.log(data);
		res.send(data);

	});
	}else if(req.body.OrderNumber){
	var temp = JSON.parse(JSON.stringify(req.body));
		
		Order.findOne({OrderNumber :req.body.OrderNumber}).exec(function(err,data){
			if(data){

				
				
					data.state = temp.state;

					data.save(function(err,d){
						if(err){
							console.log(err);
							res.redirect('/admin/orders');
						}else{
							console.log('Update data successfully');
							setTimeout(function() {
			    			console.log('Blah blah blah blah extra-blah');
							res.redirect('/admin/orders');
							}, 1300);	
							
						}
					})
			}else{
				res.redirect('/admin/orders');
			}
		
		
	});
		
	}
};

