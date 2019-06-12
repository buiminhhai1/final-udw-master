var express = require('express');
var router = express.Router();

// product
router.get('/products', function(req, res, next) {
    res.render('products', { title: 'Express' });
});

module.exports = router;
