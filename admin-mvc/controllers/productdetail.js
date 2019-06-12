var express = require('express');
var router = express.Router();

//productdetail
router.get('/productdetail', function(req, res, next) {
    res.render('productdetail', { title: 'Express' });
});


module.exports = router;
