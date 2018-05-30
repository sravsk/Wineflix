const requestPromise = require('request-promise');
const dotenv = require('dotenv').config();
const MongoDB = require('../database/index.js');


let fetchWines = (cb) => {
  var maxPage = 60
  for(let i = 1; i < maxPage; i++) {
    let options = {
      uri : 'https://lcboapi.com/products?q=wine&per_page=99&page=' + i + '&access_key=' + process.env.ACCESS_KEY,
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
    setTimeout(function(){
      console.log('iteration no ' + i)
    }, i);
  }
}

module.exports.fetchWines = fetchWines;

