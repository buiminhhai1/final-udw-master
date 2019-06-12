var express = require('express');
var router = express.Router();

/* GET users listing. */
// userlist
router.get('/userlist', function(req, res, next) {
    res.render('userlist', { title: 'UserList' });
});

module.exports = router;
