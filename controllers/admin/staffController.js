var User = require('../../models/user');
// product
/* GET users listing. */
// stafflist

exports.staffdetail = function(req, res, next) {
    User.findOne({_id :req.params.id}).exec(function(err,data){
	res.render('admin/staff/staffdetail', { title: 'Express',user : data});
	});
};


exports.stafflist = function(req, res, next) {

    User.find({Role : '1'}).exec(function(err,data){
    console.log(data);
	res.render('admin/staff/stafflist', { title: 'Express',users : data});
})
}



exports.poststafflist = function(req, res, next) {
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
							res.redirect('/admin/staffs');
						}else{
							console.log('Update data successfully');
							setTimeout(function() {
			    			console.log('Blah blah blah blah extra-blah');
							res.redirect('/admin/staffs');
							}, 1300);	
							
						}
					})
			}else{
				res.redirect('/admin/staffs');
			}
		
		
	});
		
	}
};
