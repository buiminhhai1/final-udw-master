var Account = require('../../models/account');
// top10
const bcrypt = require('bcrypt');
// top10
exports.login = function(req, res, next) {
    res.render('customer/login', { title: 'Express' });
};


// top10
exports.register = function(req, res, next) {
    res.render('customer/register', { title: 'Express' });
};


// top10
exports.forgetpass = function(req, res, next) {
    res.render('customer/forgetpass', { title: 'Express' });
};




exports.changepassword = function(req, res, next) {
    Account.findOne({idUser :req.user.idUser}).exec(function(err,data){
    console.log(data);
	res.render('customer/changepassword', { title: 'Express',account : data});
	});
}


exports.postchangepassword = function(req, res, next) {
	var temp = JSON.parse(JSON.stringify(req.body));
		console.log(temp);

		if( (req.body.newpassword != req.body.renewpassword) || req.body.newpassword.length <6 ){
			redirect('/changepassword');
		}


	Account.findOne({_id :req.body._id}).exec(function(err,data){
			if(data){

		   bcrypt.compare(req.body.oldpassword, data.password, (err, isMatch) => {
	          if (err) throw err;
	          if (isMatch) {

			    bcrypt.genSalt(10, (err, salt) => {

			      bcrypt.hash(req.body.newpassword, salt, (err, hash) => {
			        if (err) throw err;
			        data.password = hash;
			        data.save(function(err,d){
						if(err){
							console.log(err);
							res.redirect('/');
						}else{
							console.log('Update data successfully');
							setTimeout(function() {
			    			console.log('Blah blah blah blah extra-blah');
							res.redirect('/');
							}, 1300);	
							
						}
					})
					})})}
			      else{
						res.redirect('/');
					}
		
					
				});
					
				}else{
					res.redirect('/');
				}
			})
	}
