// keys.js - figure out what set of credentials to return

// To run, do the following:
// type in terminal 'node index.js'
// open up browser and type in 'localhost:5000'

// MongoDB info: User: poogs1; password: QQWAf2uGlLMeRfoU; URL: mongodb+srv://poogs1:<password>@cluster0-c9wyd.mongodb.net/test?retryWrites=true&w=majority
// Prod MongoDB info: User: poogs2; password: HnG67gFxnQzxTCv4; URL: mongodb+srv://poogs2:HnG67gFxnQzxTCv4@emaily-prod.4dluw.mongodb.net/prod?retryWrites=true&w=majority

if (process.env.NODE_ENV === 'production') {
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // we are in development - return the dev keys!
    module.exports = require('./dev');

}

module.exports = {
    googleClientID: '978654896285-hn3k0enjqjjbgl3isa0nuac1l5hct5s0.apps.googleusercontent.com', 
    googleClientSecret: 'E0vU18e_CxMxyWJHE1dS_hpa',
    mongoURI: 'mongodb+srv://poogs1:QQWAf2uGlLMeRfoU@emaily.c9wyd.mongodb.net/test?retryWrites=true&w=majority',
    cookieKey: 'redacted',

};