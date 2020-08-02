const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //Only interested in the strategy property
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, 
(accessToken, refreshToken, profile, done) => {
    // console.log("accesstoken: ", accessToken);
    // console.log("refresh token: ", refreshToken);
    // console.log("profile: ", profile);
    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                // we already have a record with the given profile ID
            } else {
                // we don't have a user record with this ID, make a new record!
                new User({ googleId: profile.id }).save();
            }
        })
}
)); //passport.use: use new strategy (GoogleOauth) that is passed in.

