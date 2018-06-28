var express = require('express');
var router = express.Router();
var info = [{
  degrees: 27,
  wind: 5
},{
  degrees: 28,
  wind: 3
},{
  degrees: 24,
  wind: 7
},{
  degrees: 20,
  wind: 10
}]

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
    city: "Oslo",
  },{
  	id: 2,
    city: "Fredrikstad",
  },{
  	id: 3,
    city: "Stavanger",
  },{
  	id: 4,
    city: "Trondheim",
  }]);
});

router.get('/degrees/:cityId', function(req,res,next) {
  console.log("Parameter found: " + info[req.params.cityId-1][0])
  console.log("Array: " + info[req.params.cityId-1].wind)
  res.json(info[req.params.cityId-1])
})  

module.exports = router;