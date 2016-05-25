var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/me', function(req, res, next) {
  //res.json(req.user);

  res.json(req.user);
});

module.exports = router;
