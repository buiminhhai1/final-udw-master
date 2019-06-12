var express = require('express');
var router = express.Router();

// salesfigures
router.get('/salesfigures', function(req, res, next) {
    res.render('salesfigures', { title: 'Express' });
});

module.exports = router;
