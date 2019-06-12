var express = require('express');
var router = express.Router();

// userdetail
router.get('/userdetail', function(req, res, next) {
    res.render('userdetail', { title: 'Express' });
});

module.exports = router;
