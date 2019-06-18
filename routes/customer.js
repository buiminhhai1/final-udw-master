var express = require('express');
var router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
var checkoutController = require('../controllers/customer/checkoutController');
var productController = require('../controllers/customer/productController');
var userController = require('../controllers/customer/userController');
var accountController = require('../controllers/customer/accountController');



router.get('/', productController.index);  
router.get('/product/mobile', productController.mobile); 
router.get('/product/camera', productController.camera);
router.get('/product/laptop', productController.laptop);
router.get('/product/tivi', productController.tivi);
router.get('/products/:id', productController.detail);


router.get('/login',accountController.login);
router.get('/register',accountController.register);
router.get('/forgetpass',accountController.forgetpass);


router.get('/updateinfo',ensureAuthenticated,userController.updateinfo);
router.post('/updateinfo',userController.postupdateinfo);

router.get('/changepassword',ensureAuthenticated,accountController.changepassword);
router.post('/changepassword',accountController.postchangepassword);

router.get('/orders',userController.orders);

router.get('/payment',checkoutController.payment);
router.get('/shipping',checkoutController.shipping);
router.get('/productsummary',checkoutController.productsummary);

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

module.exports = router;
