require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const db = require('../../database/dbConfig');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db('users')
    .where({ id: id })
    .first()
    .then(user => {
      if (!user) {
        done(new Error('User not found ' + id));
      }
      done(null, user);
    });
});

///////////////////// TOKEN GEN /////////////////////
function generateToken(id) {
  const payload = {
    subject: id
  };
  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, options, secret);
}

///////////////////////////////////////////////////////

module.exports = function(passport_param) {
  passport_param.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL:
          'https://lambda-notes-hackathon.netlify.com/auth/github/redirect'
      },
      //   function(accessToken, refreshToken, profile, cb) {
      //     User.findOrCreate({ githubId: profile.id }, function(err, user) {
      //       return cb(err, user);
      //     });
      //   }

      async (accessToken, refreshToken, profile, cb) => {
        const existingUser = await db('users')
          .where({
            email: profile.emails[0].value
          })
          .first();
        if (existingUser) {
          let accessToken = generateToken.generateToken(existingUser.email);
          existingUser.token = accessToken;
          done(null, existingUser); // supplies passport with the user that has authenticated
        } else {
          let accessToken = generateToken.generateToken(
            profile.emails[0].value
          );
          await db('users').insert({
            githubId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            token: accessToken
          });
          const user = await db('users')
            .where({ email: profile.emails[0].value })
            .first();
          done(null, user);
        }
      }
    )
  );
};
