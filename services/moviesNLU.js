const dotenv = require('dotenv').config();
const MongoDB = require('../database/index.js');
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  username: process.env.username,
  password: process.env.password,
   version_date: '2018-03-16'
 });

function wastonNLUMovies(id , movieText) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    var parameters = {
          'text': movieText,
          'features': {
            'sentiment': {},
            'emotion' : {},
            'keywords' : {},
            'entities' : {}
          }
        }

        nlu.analyze(parameters,  (err, response) => {
          if(err) {
            console.log("error", err);
          } else {
            MongoDB.updateMoviesWithAnalyzedData(id, response.sentiment, response.keywords, response.entities, response.emotion).then((updateddata) => {
              resolve(updateddata._id);
            });
          }
        });
      }, 2000);
  });
}


let moviesNLU = (cb) => {
  var promises = [];

  MongoDB.getMovies()
    .then((data) => {
      var i;
      for(i = 0; i < data.length; i++) {

        var textToAnalyze = data[i].overview;

        promises.push(wastonNLUMovies(data[i]._id, textToAnalyze));
      }

      if( i === data.length) {
        cb(true);
         console.log("All done");
        // try {
        //   Promise.all(promises)
        //     .then((results) => {
        //       cb(results);
        //       console.log("All done", results);
        //     })
        //     .catch((err) => {
        //       console.log("error inside promise all", err);
        //     });
        //   }
        //   catch ( err) {
        //     console.log("failed promise all ", err);
        //   }
         }
      });
  }

module.exports.moviesNLU = moviesNLU;