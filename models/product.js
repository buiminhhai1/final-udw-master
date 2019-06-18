var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    IdProduct :String,
    DisplayName:String,
    Supplier:String,
    ImageAvatar:String,
    Price:Number,
    IdCategory:String,
    ImageInfo: [String],
    Info: {
        thietke: String,
        HienThi:String,
        CauHInh:[String],
        Khac:[String]
    }
});

// Virtual for this book instance URL.
ProductSchema
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


module.exports = mongoose.model('Products', ProductSchema,'Products');
