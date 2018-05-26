const dotenv = require('dotenv').config();
const MongoDB = require('../database/index.js');
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

let winesNLU = (cb) => {
  var nlu = new NaturalLanguageUnderstandingV1({
  username: process.env.username,
  password: process.env.password,
   version_date: '2018-04-05'
 });

  var keys = ['serving_suggestion', 'tasting_note'];

  function obsKeysToString(obj, key, seperator) {
    return key.map(key => obj[key]).filter(value => value).join(seperator);
  }

  let textToAnalyze;
  MongoDB.retriveWines()
    .then((data) => {
      console.log("data in server", data[0]);
      for(var i = 0; i < data.length; i++) {
        textToAnalyze = obsKeysToString(data[i], keys);
        console.log("textToAnalyze here ", textToAnalyze);

        var input = "some random text here";

        var parameters = {
          'text': textToAnalyze,
          'features': {
            'sentiment': {},
            'emotion' : {},
            'keywords' : {},
            'entities' : {},
            'entities' : {}
          }
        }

        nlu.analyze(parameters, (err, results) => {
          if(err) {
            //return next(err)
            console.log("error", err);
          } else {
            console.log("results", results)
            //res.json({query : parameters.query, results});
          }
        })
      }
    });
  }

module.exports.winesNLU = winesNLU;