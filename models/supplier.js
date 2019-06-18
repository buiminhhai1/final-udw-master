var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SupplierSchema = new Schema({
	IdSupplier: String,
    DisplayName: String,
    ImageAvatar: String,
    Phone: String,
    Email: String,
    Address: String,
    DateContact: String,
    MoreInfo: String
});

// Virtual for this book instance URL.
SupplierSchema
.virtual('adminUrl')
.get(function () {
  return '/admin/supplier/'+this._id;
});



module.exports = mongoose.model('Suppliers', SupplierSchema,'Suppliers');
