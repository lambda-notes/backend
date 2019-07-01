const express = require('express');
const router = express.Router();
const passport = require('passport');

// ROUTE:   GET auth/users/google
// DESC:    Allow users to authenticate with github
// ACCESS:  Public
router.get('/github', passport.authenticate('github'));

// ROUTE:   GET auth/google/redirect
// ACCESS:  Public

router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
  let id = req.user.id;
  let token = req.user.token;
  res.cookie('auth', token);
  res.redirect(
    `https://lambda-notes-hackathon.netlify.com?token=${token}&id=${id}`
  );
});

router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy;
  res.redirect('https://lambda-notes-hackathon.netlify.com/');
});

module.exports = router;
