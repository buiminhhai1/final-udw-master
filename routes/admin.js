var express = require('express');
var router = express.Router();

var productController = require('../controllers/admin/productController');
var userController = require('../controllers/admin/userController');
var staffController = require('../controllers/admin/staffController');
var orderController = require('../controllers/admin/orderController');
var salesfigureController = require('../controllers/admin/salesfigureController');
var top10Controller = require('../controllers/admin/top10Controller');
var supplierController = require('../controllers/admin/supplierController');
var categoryController = require('../controllers/admin/categoryController');

router.get('/', userController.userlist);  
router.get('/login', userController.login);  
router.get('/register', userController.register); 

router.get('/users',userController.userlist);
router.get('/users/userdetail',userController.userdetail);

router.get('/staffs',staffController.stafflist);
router.get('/staffs/:id',staffController.staffdetail);


router.get('/suppliers',supplierController.supplierlist);
router.get('/suppliers/:id',supplierController.supplierdetail);


router.get('/products',productController.products);
router.get('/products/:id',productController.productdetail);

router.get('/category',categoryController.category);

router.get('/orders',orderController.orders);
router.get('/orders/:id',orderController.orderdetail);

router.get('/salesfigures',salesfigureController.salesfigures);

router.get('/top10',top10Controller.top10);



module.exports = router;
