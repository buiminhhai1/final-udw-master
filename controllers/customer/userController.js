var User = require('../../models/user');
// top10

// top10
exports.orders = function(req, res, next) {
    res.render('customer/orders', { title: 'Express' });
};

exports.updateinfo = function(req, res, next) {
    User.findOne({_id :req.user.idUser}).exec(function(err,data){
    console.log(data);
	res.render('customer/updateinfo', { title: 'Express',user : data});
	});
}


exports.postupdateinfo = function(req, res, next) {
	var temp = JSON.parse(JSON.stringify(req.body));
		console.log(temp);
		User.findOne({_id :req.body._id}).exec(function(err,data){
			if(data){

					data.DisplayName = temp.name;
					data.ImageAvatar = temp.image;
					data.Gender = temp.gender;
					data.DateOfBirth = temp.birthday;
					data.Email = temp.email;
					data.Phone = temp.phonenumber;
					data.Address = temp.address;
					data.MoreInfo = temp.moreinfo;
				

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
			}else{
				res.redirect('/');
			}
		
		
	});
		
	}




exports.updateinfo = function(req, res, next) {
    User.findOne({_id :req.user.idUser}).exec(function(err,data){
    console.log(data);
	res.render('customer/updateinfo', { title: 'Express',user : data});
	});
}


exports.postupdateinfo = function(req, res, next) {
	var temp = JSON.parse(JSON.stringify(req.body));
		console.log(temp);
		User.findOne({_id :req.body._id}).exec(function(err,data){
			if(data){

					data.DisplayName = temp.name;
					data.ImageAvatar = temp.image;
					data.Gender = temp.gender;
					data.DateOfBirth = temp.birthday;
					data.Email = temp.email;
					data.Phone = temp.phonenumber;
					data.Address = temp.address;
					data.MoreInfo = temp.moreinfo;
				

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
			}else{
				res.redirect('/');
			}
		
		
	});
		
	}
