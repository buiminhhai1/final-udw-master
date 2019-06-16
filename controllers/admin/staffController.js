var User = require('../../models/admin/staff');
// product
/* GET users listing. */
// userlist
exports.stafflist = function(req, res, next) {
    User.find().exec(function(err,data){
	res.render('admin/staff/stafflist', { title: 'Express',users : data});
});
 
};
exports.staffdetail = function(req, res, next) {
    User.findOne({_id :req.params.id}).exec(function(err,data){
	res.render('admin/staff/staffdetail', { title: 'Express',user : data});
	});
};
