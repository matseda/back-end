var express = require('express');
var router = express.Router();
var temp = [["Oslo",31],["Fredrikstad",27],["Trondheim",23]]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('')
});

module.exports = router;
