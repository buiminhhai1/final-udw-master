var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	DisplayName: String,
    ImageAvatar: String,
    Gender: String,
    DateOfBirth: String,
    Phone: String,
    Email: String,
    Address: String,
    DateContact: String,
	MoreInfo:String,
	Role: Number
});

// Virtual for this book instance URL.
UserSchema
.virtual('adminUrl')
.get(function () {
  return '/admin/users/'+this._id;
});


 var data = mongoose.model('', UserSchema,'Users');

//read data

// data.find({}).exec(function(err,d){
//     console.log(d);
// })

module.exports = data;