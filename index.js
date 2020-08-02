// To run, do the following:
// type in terminal 'node index.js'
// open up browser and type in 'localhost:5000'

//MongoDB info: User: poogs1; password: QQWAf2uGlLMeRfoU; URL: mongodb+srv://poogs1:<password>@cluster0-c9wyd.mongodb.net/test?retryWrites=true&w=majority


const express = require('express'); //imports express servers
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT); // tells node to listen to traffic coming through port 5000

