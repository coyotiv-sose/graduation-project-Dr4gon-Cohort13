var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.url);
  res.send({
    boards: [
      { type: 'fingerling', color: 'red' },
      { type: 'tuna', color: 'darkBrown' },
    ],
  });
});

module.exports = router;
