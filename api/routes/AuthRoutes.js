const express = require('express');
const router = express.Router();
const passport = require('passport');
require('dotenv').config();
// ROUTE:   GET auth/users/github
// DESC:    Allow users to authenticate with github
// ACCESS:  Public
router.get('/github', passport.authenticate('github'));

// router.get('/github', (req, res) => {
//   res.send('THIS WORKS');
// });

router.get('/test', (req, res) => {
  res.send(process.env.GITHUB_CLIENT_ID, process.env.GITHUB_CLIENT_SECRET);
  console.log(process.env.GITHUB_CLIENT_ID, process.env.GITHUB_CLIENT_SECRET);
});

router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect(`/`);
  }
);

// ROUTE:   GET auth/github/redirect
// ACCESS:  Public

router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
  let id = req.user.id;
  let token = req.user.token;
  res.cookie('auth', token);
  res.redirect(
    `https://lambda-notes-hackathon.netlify.com?token=${token}&id=${id}`
  );
});

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy;
  res.redirect('https://lambda-notes-hackathon.netlify.com/');
});

module.exports = router;
