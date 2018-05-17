const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
const path = require('path');

/* Initialize Express */
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(__dirname + '/../client/dist'));



app.listen(3000, () => {
  console.log('listening on port 3000');
});