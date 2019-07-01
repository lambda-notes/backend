require("dotenv").config();
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
passport.deserializeUser((id, done) => {
    db("users")
      .where({ id: id })
      .first()
      .then(user => {
        if (!user) {
          done(new Error("User not found " + id));
        }
        done(null, user);
      });
  });

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "https://lambda-notes-hackathon.netlify.com/auth/github/callback"
  },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ githubId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
async (accessToken, refreshToken, profile, cb) => {
    const existingUser = await db("users")
        .where({
            id:profile.id
        })
        .first();
        if (existingUser) {
            let accessToken = generateToken.generateToken(existingUser.id);
            existingUser.token = accessToken;
            done(null, existingUser); // supplies passport with the user that has authenticated
        } else {
            let accessToken = generateToken.generateToken(profile.id);
            await db("users").insert({
                githubID: profile.id,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                token:accessToken
            });
            const user = await db("users")
                .where({id:profile.id})
                .first();
            done(null, user);
        }
}
));