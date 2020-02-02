const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const GooglePlusTokenStrategy = require('passport-google-token').Strategy;
const FacebookTokenStrategy = require('passport-facebook-token');
const User = require('./models/User');

//JSON Web Tokens Strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      secretOrKey: process.env.JWT_SECRET
    },
    async (payload, done) => {
      try {
        //Find the user from the token
        const user = await User.findById(payload.sub);

        //If no user, handle it
        if (!user) {
          return done(null, false);
        }

        //Otherwise return the user.
        done(null, user);
      } catch (e) {
        done(error, false);
      }
    }
  )
);

//Local Strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    async (email, password, done) => {
      try {
        //Find the user given the email
        const user = await User.findOne({ 'local.email': email });
        //If not, handle it
        if (!user) {
          return done(null, false);
        }
        //Check if the password is correct
        const isMatch = await user.isValidPassword(password);

        //if not, handle it
        if (!isMatch) {
          done(null, false);
        }

        //Otherwise return the user
        done(null, user);
      } catch (e) {
        done(e, false);
      }
    }
  )
);

//Google Oauth Strategy
passport.use(
  'googleToken',
  new GooglePlusTokenStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        //Check whether this current user exists in our DB
        const existingUser = await User.findOne({ 'google.id': profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        //If new account
        const newUser = new User({
          method: 'google',
          google: {
            id: profile.id,
            email: profile.emails[0].value
          }
        });
        await newUser.save();
        done(null, newUser);
      } catch (e) {
        done(e, false, e.message);
      }
    }
  )
);

//Facebook Oauth Strategy
passport.use(
  'facebookToken',
  new FacebookTokenStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ 'facebook.id ': profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const newUser = new User({
          method: 'facebook',
          facebook: {
            id: profile.id,
            email: profile.emails[0].value
          }
        });
        await newUser.save();
        done(null, newUser);
      } catch (e) {
        done(e, false, e.message);
      }
    }
  )
);
