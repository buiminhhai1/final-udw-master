var User = require('../../models/admin/user');
// product
/* GET users listing. */
// userlist
exports.userlist = function(req, res, next) {

    User.find().exec(function(err,data){
	res.render('admin/user/userlist', { title: 'Express',users : data});
})
}

exports.userdetail = function(req, res, next) {
    User.findOne({_id :req.params.id}).exec(function(err,data){
	res.render('admin/user/userdetail', { title: 'Express',user : data});
	});
}


// exports.postuserlist = function(req, res, next) {
// 	console.log(req.body);
//     User.find().exec(function(err,data){
// 	res.render('admin/user/userlist', { title: 'Express',users : data});
// 	});
// };
