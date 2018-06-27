var express = require('express');
var router = express.Router();
var temp = [["Oslo",31],["Fredrikstad",27],["Trondheim",23]]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', JSON.stringify({ title: temp[0], title1: temp[1], title2: temp[2]}));
});

module.exports = router;
