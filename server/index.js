const express = require('express');
const bodyParser = require('body-parser');

const session = require('express-session');
const db = require('../database/index.js');

const dotenv = require('dotenv').config();

const movieService = require('../services/moviesFetcher.js');

const winesFetcherService = require('../services/winesFetcher.js');
const winesNLUService = require('../services/winesNLU.js');

const winesData = require('../client/src/data/winesData.json');

const path = require('path');

/* Initialize Express */
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/winesFetcher', (req, res, next) => {
  winesFetcherService.fetchWines((data, cb) => {
    if(cb) {
      res.json("data sent");
      }
    });
});

app.get('/api/analyzeWines', (req, res, next) => {
  winesNLUService.winesNLU((cb) => {
    if(cb) {
      res.json("data sent");
    }
  })
});


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