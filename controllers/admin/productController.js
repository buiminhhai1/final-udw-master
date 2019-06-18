var Product = require('../../models/product');
// product


exports.products =function(req, res, next) {

Product.find().exec(function(err,data){
	res.render('admin/product/products', { title: 'Express',products : data});
});
    
};

exports.productdetail = function(req, res, next) {
	Product.findOne({_id :req.params.id}).exec(function(err,data){
	// console.log(data);
	res.render('admin/product/productdetail', { title: 'Express', product : data});
});
    
};



exports.postproducts = function(req, res, next) {
	if(req.body.id){
	Product.findOne({_id :req.body.id}).exec(function(err,data){
		// console.log(data);
		res.send(data);

	});
	}else if(req.body._id){
	var temp = JSON.parse(JSON.stringify(req.body));
	
		Product.findOne({_id :req.body._id}).exec(function(err,data){
			if(data){
					data.IdProduct = temp.IdProduct;
					data.DisplayName = temp.DisplayName;
					data.Supplier = temp.Supplier;
					data.ImageAvatar = temp.ImageAvatar;
					data.Price = temp.Price;
					data.IdCategory = temp.IdCategory;
					data.Info.thietke = temp.thietke;
					data.Info.HienThi = temp.HienThi;
					data.Info.CauHInh = temp.CauHinh.split(",");
					data.Info.Khac= temp.Khac.split("~");
					data.ImageInfo = temp.ImageInfo.split(",");

					data.save(function(err,d){
						if(err){
							console.log(err);
							res.redirect('/admin/products');
						}else{
							console.log('Update data successfully');
							setTimeout(function() {
			    			console.log('Blah blah blah blah extra-blah');
							res.redirect('/admin/products');
							}, 1300);	
							
						}
					})
			}else{
				res.redirect('/admin/products');
			}
		
		
	});
		
	}
};



exports.putproducts = function(req, res, next) {
	
	var temp = JSON.parse(JSON.stringify(req.body));
	var data = new Product();
					data.IdProduct = temp.IdProduct;
					data.DisplayName = temp.DisplayName;
					data.Supplier = temp.Supplier;
					data.ImageAvatar = temp.ImageAvatar;
					data.Price = temp.Price;
					data.IdCategory = temp.IdCategory;
					data.Info.thietke = temp.thietke;
					data.Info.HienThi = temp.HienThi;
					data.Info.CauHInh = temp.CauHinh.split(",");
					data.Info.Khac= temp.Khac.split("~");
					data.ImageInfo = temp.ImageInfo.split(",");

					data.save(function(err,d){
						if(err){
							console.log(err);
							res.redirect('/admin/products');
						}else{
							console.log('Update data successfully');
							setTimeout(function() {
			    			console.log('Blah blah blah blah extra-blah');
							res.redirect('/admin/products');
							}, 1300);	
							
						}
					})
			// }else{
			// 	res.redirect('/admin/products');
			// }
		
		
	};
		
	

