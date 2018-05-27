const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('../database/index.js');

const wineService = require('../services/winesFetcher.js');
const movieService = require('../services/moviesFetcher.js');


const dotenv = require('dotenv');
const path = require('path');

/* Initialize Express */
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(__dirname + '/../client/dist'));


app.get('/winesFetcher', (req, res) => {
  wineService.fetchWines((data, cb) => {
    if(cb) {
      res.json("wines data sent");
    }
  });
})

app.get('/moviesFetcher', (req, res) => {
  movieService.fetchMovies((data, cb) => {
    if (cb) {
      res.json("movies data sent")
    }
  })
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

app.post('/signup', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  db.checkUser(username, function (wasFound){
    if (!wasFound) {
      db.saveUser(username, password);
    }
  })
  return res.redirect('/login');next();
});

app.post('/login', (req, res) => {
  console.log('/login get request running');
  let username = req.body.username;
  let password = req.body.password;

  db.checkUser(username, function (wasFound) {
    if (wasFound) {
      //password same
        //create session
      //password different
        //return to login page
      console.log('user found')
      return res.redirect('/');
    }
    else {
      console.log('user does not exist')
      return res.redirect('/login');
    }
  });
})



app.listen(3000, () => {
  console.log('listening on port 3000');
});