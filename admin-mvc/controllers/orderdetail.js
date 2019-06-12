var express = require('express');
var router = express.Router();


// orderdetail
router.get('/orderdetail', function(req, res, next) {
    res.render('orderdetail', { title: 'Express' });
});

module.exports = router;
