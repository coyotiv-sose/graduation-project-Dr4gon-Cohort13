var express = require('express');
var router = express.Router();
const Person = require('../person');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const dbUsers = await Person.find();
  console.log('Backend retrieval of users: ', dbUsers);
  const users = dbUsers.map(user => ({
    nickName: user.nickName,
    email: user.email,
  }));
  res.send(users);
});

router.put('/', function (req, res, next) {
  res.send('This is a put response');
});

router.post('/', function (req, res, next) {
  Person.create({ nickName: req.body.nickName, email: req.body.email });
  res.sendStatus(200);
});

router.delete('/', function (req, res, next) {
  res.send('This is a delete response');
});

module.exports = router;
