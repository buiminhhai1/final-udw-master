var express = require('express');
var router = express.Router();

var productController = require('../controllers/admin/productController');
var userController = require('../controllers/admin/userController');
var orderController = require('../controllers/admin/orderController');
var salesfigureController = require('../controllers/admin/salesfigureController');
var top10Controller = require('../controllers/admin/top10Controller');



router.get('/', userController.userlist);  


router.get('/users',userController.userlist);
router.get('/users/:id',userController.userdetail);


router.get('/products',productController.products);
router.get('/products/:id',productController.productdetail);

router.get('/orders',orderController.orders);
router.get('/orders/:id',orderController.orderdetail);

router.get('/salesfigures',salesfigureController.salesfigures);

router.get('/top10',top10Controller.top10);



module.exports = router;
