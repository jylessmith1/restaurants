var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('./employees', function(req, res, next) {
  res.send('respond with a resource');
});
console.log('test')
module.exports = router;
