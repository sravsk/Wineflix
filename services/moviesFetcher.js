const requestPromise = require('request-promise');
const dotenv = require('dotenv').config();
const MongoDB = require('../database/index.js');


let fetchMovies = (data, cb) => {
  var options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    qs: {
       page: '1',
       include_video: 'false',
       include_adult: 'false',
       sort_by: 'popularity.desc',
       language: 'en-US',
       api_key: '6f0f6ccafaaff428439efd8e3edd254a'
     },
    body: '{}',
    json: true
  };


  requestPromise(options)
    .then((movies)=> {
      MongoDB.saveMovies(movies.results, cb);
      console.log(JSON.parse(movies.results));
    })
    .catch((err) => {
      console.log("cannot fetch data from The MovieDB", err);
    });
}

module.exports.fetchMovies = fetchMovies;

