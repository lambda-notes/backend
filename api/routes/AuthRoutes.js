const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get('/auth/github',
  passport.authenticate('github'));

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;