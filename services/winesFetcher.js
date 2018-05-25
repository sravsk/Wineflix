const requestPromise = require('request-promise');
const dotenv = require('dotenv').config();
const MongoDB = require('../database/index.js');


let fetchWines = (cb) => {
  let options = {
    uri : 'https://lcboapi.com/products?q=wine&per_page=99&page=3&access_key=' + process.env.ACCESS_KEY,
    headers : {
      'User-Agent' : 'Request-Promise'
    },
    json : true
  };

requestPromise(options)
  .then((wines)=> {
    MongoDB.saveWines(wines.result);
    cb(wines);
  })
  .catch((err) => {
    console.log("cannot fetch data from LCBO API", err);
  });
}

module.exports.fetchWines = fetchWines;

