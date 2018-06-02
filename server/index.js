const express = require('express');
const bodyParser = require('body-parser');

const session = require('express-session');
const db = require('../database/index.js');

const dotenv = require('dotenv').config();

const movieService = require('../services/moviesFetcher.js');
const movieGenreService = require('../services/moviesGenreFetcher.js');
const moviesNLUService = require('../services/moviesNLU.js');

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
    res.send(movies);
  })
})

app.post('/moviedata', (req, res) => {
  db.getMoviesQuery(req.body.query, (movies) => {
    res.send(movies);
  })
})

app.get('/api/genreFetcher', (req, res) => {
  movieGenreService.fetchMovieGenre((data) => {
    if(data) {
      res.end();
    }
  })
})

app.get('/api/analyzeMovies', (req, res, next) => {
  moviesNLUService.moviesNLU((results) => {
      if(results) {
        res.end();
      }
  })
});

app.post('/suggestMovies', (req, res) => {
  var wineScore = JSON.parse(Object.keys(req.body));
  var wineScoreRound = Math.round(wineScore * 100) / 100;
  var results = [];
  db.getMovies().then((moviesData) => {
    for(var i =0; i < moviesData.length; i++) {
      var movieScore = moviesData[i].sentiment.sentiment.document.score;
      var movieScoreRound = Math.round(movieScore * 100) / 100;
      if(movieScoreRound === wineScoreRound) {
        results.push(moviesData[i])
      }
    }
    res.send(results);
  })
});

app.get('/wineItem', (req, res) => {
   var wineID = req.query.q;
  db.getWine(wineID, (result) => {
    res.send(result);
  })
})


app.post('/suggestWines', (req, res) => {
  var movieScore = JSON.parse(Object.keys(req.body));
  var movieScoreRound = Math.round(movieScore * 100) / 100;
  var results = [];
  db.retriveWines().then((winesData) => {
    for(var i =0; i < winesData.length; i++) {
      var wineScore = winesData[i].sentiment.sentiment.document.score;
      var wineScoreRound = Math.round(wineScore * 100) / 100;
      if(Math.abs(wineScoreRound) === Math.abs(movieScoreRound)) {
        results.push(winesData[i])
      }
    }
    res.send(results);
  })
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

app.get('*', function(req, res) {
 // console.log('serving default route')
 res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});



app.listen(3000, () => {
  console.log('listening on port 3000');
});