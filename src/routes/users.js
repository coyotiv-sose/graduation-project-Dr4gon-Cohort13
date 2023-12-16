var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({
    users: [
      { name: 'John Doe', email: 'john@doe.com' },
      { name: 'Jane Doe', email: 'jane@doe.com' },
    ],
  });
});

router.put('/', function (req, res, next) {
  res.send('This is a put response');
});

router.post('/', function (req, res, next) {
  res.send('This is a post response');
});

router.delete('/', function (req, res, next) {
  res.send('This is a delete response');
});

module.exports = router;
