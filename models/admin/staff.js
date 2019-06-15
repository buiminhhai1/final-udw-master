var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StaffSchema = new Schema({
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
StaffSchema
.virtual('adminUrl')
.get(function () {
  return '/admin/staffs/'+this._id;
});

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
// d.find({})
//     .exec(function (err, list_books) {
//       // Successful, so render
//       console.log(list_books);
//       });


module.exports = mongoose.model('Staff', StaffSchema,'KhachHang');
