var User = require('../models/user');
// product
/* GET users listing. */
// userlist
exports.userlist = function(req, res, next) {
    User.find().exec(function(err,data){
	res.render('userlist', { title: 'Express',users : data});
});
 
};
exports.userdetail = function(req, res, next) {
    User.findOne({_id :req.params.id}).exec(function(err,data){
	res.render('userdetail', { title: 'Express',user : data});
	});
};

