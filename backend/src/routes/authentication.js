var express = require('express');
var router = express.Router();
const User = require('../model/authUser');
const passport = require('passport');

router.post('/newUser', async function (req, res, next) {
  const { email, nickName, password } = req.body;
  const newUser = await User.register({ email, nickName }, password, function (err, user) {
    if (err) {
      console.log('Error on user auth creation' + err);
    }
    res.send(user);
  });

  // const newUser = new User({ username: req.body.email, nickName: req.body.nickName });
  // await newUser.setPassword(req.body.password);
  // await newUser.save();

  res.send(newUser);
});

router.post('/session', passport.authenticate('local', { failWithError: true }), function (req, res) {
  console.log('User is authenticated');
  res.send(req.user);
});

module.exports = router;
