var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next){
	res.render('index');
});
  
router.get('/search',function(req, res, next){
	res.render('search');
});
  
router.get('/sos',function(req, res, next){
	res.render('sos');
});

module.exports = router;
