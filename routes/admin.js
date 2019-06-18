var express = require('express');
var router = express.Router();

var productController = require('../controllers/admin/productController');
var userController = require('../controllers/admin/userController');
var orderController = require('../controllers/admin/orderController');
var salesfigureController = require('../controllers/admin/salesfigureController');
var top10Controller = require('../controllers/admin/top10Controller');
var supplierController = require('../controllers/admin/supplierController');
var categoryController = require('../controllers/admin/categoryController');
var staffController = require('../controllers/admin/staffController');



router.get('/category',categoryController.category);


router.get('/', userController.userlist);  
// router.get('/login', userController.login);  


router.get('/users',userController.userlist);
router.get('/users/:id',userController.userdetail);
router.post('/users',userController.postuserlist);



router.get('/master', userController.master);  



router.get('/products',productController.products);
router.get('/products/:id',productController.productdetail);

router.get('/orders',orderController.orders);
router.get('/orders/:id',orderController.orderdetail);
router.post('/orders',orderController.postorderlist);

router.get('/salesfigures',salesfigureController.salesfigures);

router.get('/top10',top10Controller.top10);


router.get('/suppliers',supplierController.supplierlist);
router.get('/suppliers/supplierdetail',supplierController.supplierdetail);



router.get('/staffs',staffController.stafflist);
router.get('/staffs/:id',staffController.staffdetail);
router.post('/staffs',staffController.poststafflist)


module.exports = router;
