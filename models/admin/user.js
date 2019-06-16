var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	Ten: String,
    CMND: String,
    NgaySinh: String,
    DiaChi: String,
    SDT: String,
    Hinh: String,
    TenTaiKhoan: String,
    MatKhau: String
});

// Virtual for this book instance URL.
UserSchema
.virtual('adminUrl')
.get(function () {
  return '/admin/users/'+this._id;
});

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
// d.find({})
//     .exec(function (err, list_books) {
//       // Successful, so render
//       console.log(list_books);
//       });


module.exports = mongoose.model('', UserSchema,'KhachHang');
