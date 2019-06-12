var express = require('express');
var router = express.Router();

// orders
router.get('/orders', function(req, res, next) {
    res.render('orders', { title: 'Express' });
});

module.exports = router;
