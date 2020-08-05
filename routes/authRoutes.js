const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', { //'google' is used because it's identified in the googlestrategy.
        scope: ['profile', 'email']
    }))
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user); // gets message saying 'undefined' to notify user they are logged out. Or no content
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}
