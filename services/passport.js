const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user), err => console.error(err))
})

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log('Authenticating User: ', profile.displayName)
    console.log('Checking profile id: ', profile.id)
    User.findOne({ googleId: profile.id })
      .then((existingUser, err) => {
        if (existingUser) {
          // existing user
          console.log('User already exists')
          done(null, existingUser)
        } else {
          // New user, needs to be saved
          console.log('User does not exist, creating new user for ' + profile.id)
          const unsavedUser = new User({
            googleId: profile.id
          })
          unsavedUser.save()
            .then(user => done(null, user), err => console.error(err))
        }
      }, err => console.error(err))
  }, err => console.error(err))
)
