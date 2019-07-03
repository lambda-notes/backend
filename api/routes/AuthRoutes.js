const express = require('express');
const router = express.Router();
const passport = require('passport');
// require('dotenv').config();
// ROUTE:   GET auth/users/github
// DESC:    Allow users to authenticate with github
// ACCESS:  Public
router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['profile']
  })
);

router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect(`/dashboard`);
  }
);

// ROUTE:   GET auth/github/redirect
// ACCESS:  Public

router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
  console.log('this is req.user---->', req.user);
  let id = req.user.id;
  let token = req.user.token;
  res.cookie('auth', token);
  res.redirect(`https://lambda-notes-hackathon.netlify.com/dashboard/`);
});

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy;
  res.redirect('https://lambda-notes-hackathon.netlify.com');
});

module.exports = router;
