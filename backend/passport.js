var passport = require('passport');
var GoogleTokenStrategy = require('passport-google-token').Strategy;
module.exports = function(){
    console.log("hello")
    passport.use(new GoogleTokenStrategy({
        clientID: "1091762201107-6802ciaf38hqp5s3o2c85skgc6e4adbq.apps.googleusercontent.com",
        clientSecret: "SGqsvGF9axKbl9r0N9kcyYWa"
    },
    function (accessToken, refreshToken, profile, done) {
        User.upsertGoogleUser(accessToken, refreshToken, profile, function(err, user) {
            return done(err, user);
        });
    }));
}