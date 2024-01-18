var express = require('express');
var router = express.Router();
const User = require('../model/authUser');

router.post('/newUser', async function (req, res, next) {
  const newUser = new User({ username: req.body.email, nickName: req.body.nickName });
  await newUser.setPassword(req.body.password);
  await newUser.save();

  res.send(newUser);
});

module.exports = router;
