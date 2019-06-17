var Supplier = require('../../models/supplier');
// product
/* GET users listing. */
// supplier
exports.supplierlist = function(req, res, next) {
    Supplier.find().exec(function(err,data){
	res.render('admin/supplier/supplierlist', { title: 'Express',users : data});
});
 
};
exports.supplierdetail = function(req, res, next) {
    Supplier.findOne({_id :req.params.id}).exec(function(err,data){
	res.render('admin/supplier/supplierdetail', { title: 'Express',user : data});
	});
};

