var express = require('express');
var router = express.Router();

var checkoutController = require('../controllers/customer/checkoutController');
var productController = require('../controllers/customer/productController');
var userController = require('../controllers/customer/userController');
var accountController = require('../controllers/customer/accountController');



router.get('/', productController.index);  
<<<<<<< HEAD
router.get('/mobile', productController.mobile);
router.get('/camera', productController.camera);
router.get('/laptop', productController.laptop);
router.get('/tivi', productController.tivi);
router.get('/product',productController.product);
router.get('/productdetail',productController.productdetail);
=======
router.get('/product/mobile', productController.mobile); 
router.get('/product/camera', productController.camera);
router.get('/product/laptop', productController.laptop);
router.get('/product/tivi', productController.tivi);
router.get('/products/:id', productController.detail);

>>>>>>> 95aff43c1a46fa4466159db0dacb0ae6860400c4

router.get('/login',accountController.login);
router.get('/register',accountController.register);
router.get('/forgetpass',accountController.forgetpass);


router.get('/updateinfo',userController.updateinfo);
router.get('/orders',userController.orders);

router.get('/payment',checkoutController.payment);
router.get('/shipping',checkoutController.shipping);
router.get('/productsummary',checkoutController.productsummary);

<<<<<<< HEAD



=======
>>>>>>> 95aff43c1a46fa4466159db0dacb0ae6860400c4
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

module.exports = router;
