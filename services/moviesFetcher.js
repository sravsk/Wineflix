const requestPromise = require('request-promise');
const dotenv = require('dotenv').config();
const MongoDB = require('../database/index.js');


let fetchMovies = (cb) => {
  var maxPage = 140
  for(let i = 115; i < maxPage; i++) {
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      qs: {
         page: i,
         include_video: 'false',
         include_adult: 'false',
         sort_by: 'popularity.desc',
         language: 'en-US',
         api_key: process.env.MDBACCESS_KEY
       },
      body: '{}',
      json: true
    };


    requestPromise(options)
      .then((movies)=> {
        MongoDB.saveMovies(movies.results);
        cb(movies);
      })
      .catch((err) => {
        console.log("cannot fetch data from The MovieDB", err);
      });
      setTimeout(function(){
        console.log('iteration no ' + i)
      }, i);
  }
}

module.exports.fetchMovies = fetchMovies;

