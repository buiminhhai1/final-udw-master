var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MobileSchema = new Schema({
	MaMobile: String,
    Name: String,
    Price: String,
    ManHinh: String,
    CamTruoc: String,
    CamSau: String,
    Ram: String,
    BoNhoTrong: String,
    CPU: String,
    GPU: String,
    Pin: String,
    HDH: String,
    Sim: String,
    Hinh: String
});

// Virtual for this book instance URL.
MobileSchema
.virtual('adminUrl')
.get(function () {
  return '/admin/products/'+this._id;
});

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
// d.find({})
//     .exec(function (err, list_books) {
//       // Successful, so render
//       console.log(list_books);
//       });


module.exports = mongoose.model('Mobile', MobileSchema,'Mobile');
