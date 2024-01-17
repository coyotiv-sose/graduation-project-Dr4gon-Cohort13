var express = require('express');
var router = express.Router();
const Person = require('../model/person');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const dbUsers = await Person.find();
  // console.log('Backend retrieval of users: ', dbUsers);
  const users = dbUsers.map(user => ({
    nickName: user.nickName,
    email: user.email,
  }));
  res.send(users);
});

router.put('/', function (req, res, next) {
  res.send('This is a put response');
});

router.post('/', async function (req, res, next) {
  await Person.create({ nickName: req.body.nickName, email: req.body.email, height: req.body.height });
  res.sendStatus(200);
});

router.delete('/:nickName', async function (req, res, next) {
  console.log('Backend deletion of users:', req.params.nickName);
  await Person.findOneAndDelete({ nickName: req.params.nickName });
  res.sendStatus(200);
});

module.exports = router;
