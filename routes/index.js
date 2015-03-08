var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendfile(path.resolve('../public/home.html'));
  //res.render('index', { title: 'Express' });
});

module.exports = router;
