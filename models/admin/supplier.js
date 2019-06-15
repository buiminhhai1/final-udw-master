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
  return '/admin/supplier/'+this._id;
});



module.exports = mongoose.model('Supplier', UserSchema,'NhaCungCap');
