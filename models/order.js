var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	OrderNumber: String,
    UserID: String,
    NgayMua: String,
    state: String,
    PhoneReceiver: String,
    AddressReceiver: String,
    TotalAmount : Number
});

// Virtual for this book instance URL.
OrderSchema
.virtual('orderUrl')
.get(function () {
  return '/admin/orders/'+this._id;
});

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
// d.find({})
//     .exec(function (err, list_books) {
//       // Successful, so render
//       console.log(list_books);
//       });


module.exports = mongoose.model('Orders', OrderSchema,'Orders');
