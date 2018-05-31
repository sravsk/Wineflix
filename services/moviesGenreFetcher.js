const requestPromise = require('request-promise');
const dotenv = require('dotenv').config();
const MongoDB = require('../database/index.js');


let fetchMovieGenre = (cb) => {
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/genre/movie/list',
      qs: {
         api_key: process.env.MDBACCESS_KEY
       },
      body: '{}',
      json: true
    };


    requestPromise(options)
      .then((data)=> {
        MongoDB.saveMovieGenres(data.genres);
        cb(data);
      })
      .catch((err) => {
        console.log("cannot fetch genre's from The MovieDB", err);
      });
}

module.exports.fetchMovieGenre = fetchMovieGenre;

