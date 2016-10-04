var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {'title': 'Bharat Ventures'});
});

router.get("/bsa", function(req, res, next){
	res.render('bsa', {'UserName': 'Subrat', "title": "Bharat Ventures"});
});


module.exports = router;
