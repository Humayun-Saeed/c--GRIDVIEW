var express=require('express')
var passport=require('passport')
var GoogleStrategy=require('passport-google-oauth2').Strategy

passport.use(new GoogleStrategy({

    clientID:'235986693767-ju7fdmp35ki0t0f02kuqi8jn6mqei94m.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL: "http://localhost:3000/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });