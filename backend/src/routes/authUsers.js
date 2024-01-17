var express = require('express');
var router = express.Router();
const AuthUser = require('../authUser');
const passport = require('passport');

router.get('/session', async function (req, res, next) {
  console.log('The current user is', req.user);
  res.send(req.user);
});

router.post('/', async function (req, res, next) {
  const { nickName, email, password } = req.body;

  await AuthUser.register({ nickName, email }, password);

  res.sendStatus(200);
});

router.post('/session', passport.authenticate('local', { failWithError: true }), function (req, res) {
  res.send(req.user);
});

router.delete('/:nickName', async function (req, res, next) {});

module.exports = router;
