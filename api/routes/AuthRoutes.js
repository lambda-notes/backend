const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/github', passport.authenticate('github'));

// ROUTE:   GET auth/users/google
// DESC:    Allow users to authenticate with github
// ACCESS:  Public

router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
  let id = req.user.id;
  let token = req.user.token;
  res.cookie('auth', token);
  res.redirect(
    `https://lambda-school-notes.herokuapp.com?token=${token}&id=${id}`
  );
});

router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

module.exports = router;
