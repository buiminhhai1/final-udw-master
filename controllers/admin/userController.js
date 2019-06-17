var User = require('../../models/user');
var mongoose = require('mongoose');

// product
/* GET users listing. */
// userlist
exports.userlist = function(req, res, next) {
	// console.log(req.user);

    User.find({Role : '0'}).exec(function(err,data){
    // console.log(data);
	res.render('admin/user/userlist', { title: 'Express',users : data});
})
}

exports.userdetail = function(req, res, next) {
    User.findOne({_id :req.params.id}).exec(function(err,data){
    // console.log(data);
	res.render('admin/user/userdetail', { title: 'Express',user : data});
	});
}



exports.master = function(req, res, next) {
    User.findOne({_id :req.user.idUser}).exec(function(err,data){
    // console.log(data);
	res.render('admin/user/userdetail', { title: 'Express',user : data});
	});
}






exports.postuserlist = function(req, res, next) {
	if(req.body.id){
	User.findOne({_id :req.body.id}).exec(function(err,data){
		// console.log(data);
		res.send(data);

	});
	}else if(req.body._id){
	var temp = JSON.parse(JSON.stringify(req.body));
		
		User.findOne({_id :req.body._id}).exec(function(err,data){
			if(data){

					data.DisplayName = temp.DisplayName;
					data.ImageAvatar = temp.ImageAvatar;
					data.Gender = temp.Gender;
					data.DateOfBirth = temp.DateOfBirth;
					data.Email = temp.Email;
					data.Phone = temp.Phone;
					data.Address = temp.Address;
					data.DateContact = temp.DateContact;
					data.MoreInfo = temp.MoreInfo;

					data.save(function(err,d){
						if(err){
							console.log(err);
							res.redirect('/admin/users');
						}else{
							console.log('Update data successfully');
							setTimeout(function() {
			    			console.log('Blah blah blah blah extra-blah');
							res.redirect('/admin/users');
							}, 1300);	
							
						}
					})
			}else{
				res.redirect('/admin/users');
			}
		
		
	});
		
	}
};

