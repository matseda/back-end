var express = require('express');
var router = express.Router();
var temp = [["Oslo",31],["Fredrikstad",27],["Trondheim",23]]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: temp[1] });
  res.render('index', { title: temp[2] });
  res.render('index', { title: temp[3] });
});

module.exports = router;
