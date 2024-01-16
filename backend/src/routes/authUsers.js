var express = require('express');
var router = express.Router();
const AuthUser = require('../authUser');
const passport = require('passport');

/* GET users listing. */
router.get('/', async function (req, res, next) {});

router.put('/', function (req, res, next) {
  res.send('This is a put response');
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
