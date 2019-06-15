var Category = require('../../models/admin/user');
// product
/* GET users listing. */
// category
exports.category = function(req, res, next) {
    Category.find().exec(function(err,data){
	res.render('admin/category', { title: 'Express',users : data});
});
 
};
exports.categorydetail = function(req, res, next) {
    Category.findOne({_id :req.params.id}).exec(function(err,data){
	res.render('admin/categorydetail', { title: 'Express',user : data});
	});
};

