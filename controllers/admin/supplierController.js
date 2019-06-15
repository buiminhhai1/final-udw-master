var Supplier = require('../../models/admin/supplier');
// product
/* GET users listing. */
// supplier
exports.supplierlist = function(req, res, next) {
    Supplier.find().exec(function(err,data){
	res.render('admin/supplierlist', { title: 'Express',users : data});
});
 
};
exports.supplierdetail = function(req, res, next) {
    Supplier.findOne({_id :req.params.id}).exec(function(err,data){
	res.render('admin/supplierdetail', { title: 'Express',user : data});
	});
};

