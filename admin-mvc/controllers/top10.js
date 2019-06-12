var express = require('express');
var router = express.Router();

// top10
router.get('/top10', function(req, res, next) {
    res.render('top10', { title: 'Express' });
});

module.exports = router;
