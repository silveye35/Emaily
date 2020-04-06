// To run, do the following:
// type in terminal 'node index.js'
// open up browser and type in 'localhost:5000'

const express = require('express'); //imports express servers
const app = express();

app.get('/', (rec, res) => {
	res.send({ bye: 'buddy' })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT); // tells node to listen to traffic coming through port 5000

