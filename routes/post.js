const express = require('express');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var passport = require('passport'), FacebookStrategy = require('passport-facebook').Strategy;
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('sites/index');
});



passport.use(new FacebookStrategy({
    clientID: "338792783461182",
    clientSecret: "10ac22614a4092cce79edc4bae83dc05",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(function(err, user) {
        if (err) { return done(err); }
        done(null, user);
    });
}
));

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/' }));

passport.use(new GoogleStrategy({
    clientID: "428049651632-5kvu4ogbjt5p5a37n1brd4ap1ai6bsl8.apps.googleusercontent.com"	,
    clientSecret: "YypligpEQnqUfWTTuPUMvpv4" ,
    callbackURL: "http://localhost:3000/auth/google/"
},
function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
    });
}
));

router.get('/auth/google',
passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
    res.redirect('/');
});





module.exports = router;