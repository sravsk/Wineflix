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
  winesFetcherService.fetchWines((data) => {
    if(data) {
      res.end();
      }
    });
});

app.get('/api/analyzeWines', (req, res, next) => {
  winesNLUService.winesNLU((results) => {
      //res.json("data sent");
      if(results) {
        res.end();
      }

  })
});

app.get('/winedata', (req, res) => {
  db.retrivePopularWines((wines) => {
    res.send(wines);
  })
})

app.post('/winedata', (req, res) => {
  db.getWinesQuery(req.body.query, (wines) => {
    res.send(wines);
  })
})

app.get('/api/moviesFetcher', (req, res) => {
  movieService.fetchMovies((data) => {
    if (data) {
      res.end();
    }
  })
})

app.get('/moviedata', (req, res) => {
  db.getPopularMovies((movies) => {
    //console.log('movies', movies)
    res.send(movies);
  })
})

app.post('/moviedata', (req, res) => {
  db.getMoviesQuery(req.body.query, (movies) => {
    res.send(movies);
  })
})


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

app.get('*', function(req, res) {
 // console.log('serving default route')
 res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});



app.listen(3000, () => {
  console.log('listening on port 3000');
});