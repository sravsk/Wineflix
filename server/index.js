const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const service = require('../services/winesFetcher.js');
const db = require('../database/index.js');


const dotenv = require('dotenv');
const path = require('path');

/* Initialize Express */
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(__dirname + '/../client/dist'));


app.get('/winesFetcher', (req, res) => {
  service.fetchWines((data, cb) => {
    if(cb) {
      res.json("data sent");
    }
  });
})

app.get('*', function(req, res) {
 // console.log('serving default route')
 res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});


app.use(session({
  secret: 'asdf',
  resave: false,
  saveUninitialized: true
}));

app.post('/signup', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  db.checkUser(username, function (wasFound){
    if (wasFound) {
      console.log('user exists');
    }
    else {
      console.log('user does not exist');
      db.saveUser(username, password);
    }

  })
  res.end();
});

app.get('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  db.checkUser(username, function (wasFound) {
    if (wasFound) {
      //create session
      console.log('app.get user found')
    }
    else {
      console.log('app.get user does not exist')
    }
  });
  res.end();
})



app.listen(3000, () => {
  console.log('listening on port 3000');
});