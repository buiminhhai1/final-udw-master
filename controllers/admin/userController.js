var User = require('../../models/admin/user');
// product
/* GET users listing. */
// userlist
exports.userlist = function(req, res, next) {
    User.find().exec(function(err,data){
	res.render('admin/userlist', { title: 'Express',users : data});
});
 
};
exports.userdetail = function(req, res, next) {
    User.findOne({_id :req.params.id}).exec(function(err,data){
	res.render('admin/userdetail', { title: 'Express',user : data});
	});
};

exports.login = function(req, res, next) {
    
	res.render('admin/login', { title: 'Express'});
	
};

