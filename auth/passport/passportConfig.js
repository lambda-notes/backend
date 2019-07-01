require('dotenv').config();
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const db = require('../../database/dbConfig');

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

///////////////////// TOKEN GEN AND AUTHENTICATE /////////////////////
function generateToken(id) {
  const payload = {
    subject: id
  };
  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, options, secret);
}

function authenticate(req, res, next) {
  let token = req.headers.authorization;
  if (token) {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err)
        return res.status(401).json({ message: "Didn't work for some reason" });

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
}
/////////////////////////////////////////////////////////////////////

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL:
        'https://lambda-notes-hackathon.netlify.com/auth/github/callback'
    },
    // function(accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ githubId: profile.id }, function(err, user) {
    //     return cb(err, user);
    //   });
    // }
    async (accessToken, refreshToken, profile, cb) => {
      const existingUser = await db('users')
        .where({
          eamil: profile.emails[0].value
        })
        .first();
      if (existingUser) {
        let accessToken = generateToken.generateToken(existingUser.email);
        existingUser.token = accessToken;
        done(null, existingUser); // supplies passport with the user that has authenticated
      } else {
        let accessToken = generateToken.generateToken(profile.emails[0].value);
        await db('users').insert({
          githubID: profile.id,
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
