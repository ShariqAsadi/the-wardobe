const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');
const passport = require('passport');
require('../passport');

router.post('/user/register', UsersController.sign_up);

router.post(
  '/user/login',
  passport.authenticate('local', { session: false }),
  UsersController.sign_in
);

router.post(
  '/user/oauth/google',
  passport.authenticate('googleToken', { session: false }),
  UsersController.google_oauth
);

router.post(
  '/user/oauth/facebook',
  passport.authenticate('facebookToken', { session: false }),
  UsersController.facebook_oauth
);

router.get(
  '/user/secret',
  passport.authenticate('jwt', { session: false }),
  UsersController.secret
);

router.get(
  '/user/session',
  passport.authenticate('jwt', { session: false }),
  UsersController.session
);

module.exports = router;
