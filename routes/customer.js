var express = require('express');
var router = express.Router();

var checkoutController = require('../controllers/customer/checkoutController');
var productController = require('../controllers/customer/productController');
var userController = require('../controllers/customer/userController');
var accountController = require('../controllers/customer/accountController');



router.get('/', productController.products);  


router.get('/login',accountController.login);
router.get('/register',accountController.register);
router.get('/forgetpass',accountController.forgetpass);


router.get('/updateinfo',userController.updateinfo);
router.get('/orders',userController.orders);

router.get('/payment',checkoutController.payment);
router.get('/shipping',checkoutController.shipping);
router.get('/productsummary',checkoutController.productsummary);


router.get('/products',productController.products);
router.get('/productdetail',productController.productdetail);



module.exports = router;
