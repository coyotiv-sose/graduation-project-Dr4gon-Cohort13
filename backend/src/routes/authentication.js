var express = require('express');
var router = express.Router();
const User = require('../model/authUser');
const passport = require('passport');
const welcomeGenerator = require('../lib/welcome-generator');

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

router.post('/session', passport.authenticate('local', { failWithError: true }), async function (req, res) {
  console.log('User is authenticated');

  res.send(req.user);
});

router.post('/welcome', async function (req, res) {
  const msg = await welcomeGenerator({ name: req.body.nickName, date: req.body.date, location: req.body.location });
  res.send(msg);
});

module.exports = router;
