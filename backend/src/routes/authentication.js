var express = require('express');
var router = express.Router();
const User = require('../model/authUser');
const passport = require('passport');
const welcomeGenerator = require('../api/welcome-generator');

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

/** Authenticates the user and bin the session to them */
router.post('/session', passport.authenticate('local', { failWithError: true }), function (req, res) {
  console.log('User is authenticated');
  res.send(req.user);
});

/** This retrieves the info about a user
 * with an authenticated session cookie */
router.get('/user', async function (req, res, next) {
  console.log('The current user is', req.user);
  res.send(req.user);
});

router.post('/welcome', async function (req, res) {
  const { name, date, location } = req.body;

  // console.log('Entering welcome creation');

  const msg = await welcomeGenerator({ name, date, location });

  // console.log('Message is: ', msg.content);

  res.send(msg.content);
});

router.delete('/session', function (req, res) {
  req.logout(() => {
    res.sendStatus(200);
  });
});

module.exports = router;
