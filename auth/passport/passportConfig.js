require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const db = require('../../database/dbConfig');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.serializeUser((user, done) => {
  console.log('serialized----->', user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('DEserialized----->', id);
  db('users')
    .where({ id: id })
    .first()
    .then(user => {
      if (!user) {
        return done(new Error('User not found ' + id));
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
  //   const secret = 'this is a secret';
  return jwt.sign(payload, secret, options);
}

///////////////////////////////////////////////////////

module.exports = function(passport_param) {
  passport_param.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        scope: ['user:id'],
        callbackURL:
          process.env.GITHUB_CALLBACK_URL ||
          'https://lambda-school-notes.herokuapp.com/auth/github/redirect'
      },
      //   function(accessToken, refreshToken, profile, cb) {
      //     User.findOrCreate({ githubId: profile.id }, function(err, user) {
      //       return cb(err, user);
      //     });
      //   }

      async (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        console.log('keys', Object.keys(profile));
        console.log('keys', Object.keys(profile._json));
        const existingUser = await db('users')
          .where({
            githubId: profile._json.id
          })
          .first();
        console.log('existing user ---->', existingUser);
        if (existingUser) {
          let accessToken = generateToken(existingUser.id);
          existingUser.token = accessToken;
          done(null, existingUser); // supplies passport with the user that has authenticated
        } else {
          let accessToken = generateToken(profile._json.id);
          const results = await db('users').insert({
            githubId: profile._json.id,
            firstName: profile._json.name,
            lastName: profile._json.name,
            accountType: 4,
            email: profile._json.email,
            token: accessToken,
            cohortID: 1
          });
          console.log('this is the result----->', results);
          console.log('this is the access token --->', accessToken);
          const user = await db('users')
            .where({ githubId: profile._json.id })
            .first();
          console.log('this is the user------>', user);
          done(null, user);
        }
      }
    )
  );
};
