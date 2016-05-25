var FacebookStrategy = require('passport-facebook').Strategy;
module.exports = function(app,passport){
  var option = {
    clientID: '962962330444189',
    clientSecret: 'd2be1acf0d61ceabb76e09797f3bb128',
    callbackURL: "http://192.168.1.43:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
  }
  passport.use(new FacebookStrategy(option,
    function(accessToken, refreshToken, profile, done) {
      profile.access_token = accessToken;
      profile.refresh_token = refreshToken;
      done(null, profile);
    }
  ));
  app.get('/auth/facebook', passport.authenticate('facebook'));
  app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/' }));
}
