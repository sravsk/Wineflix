const dotenv = require('dotenv').config();
const MongoDB = require('../database/index.js');
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

let winesNLU = (cb) => {
  var nlu = new NaturalLanguageUnderstandingV1({
  username: process.env.username,
  password: process.env.password,
   version_date: '2018-04-05'
 });



  MongoDB.retriveWines()
    .then((data) => {
      for(var i = 0; i < data.length; i++) {
      var keys = ['description', 'serving_suggestion', 'tasting_note', '_id'];

      function obsKeysToString(obj, key, seperator) {
        return key.map(key => obj[key]).filter(value => value).join(seperator);
      }

      var textToAnalyze = obsKeysToString(data[i], keys);

      var parameters = {
          'text': textToAnalyze,
          'features': {
            'sentiment': {},
            'emotion' : {},
            'keywords' : {},
            'entities' : {}
          }
        }

        return new Promise((resolve) => {

          nlu.analyze(parameters,  (err, response) => {
            if(err) {
              console.log("error", err);
            } else {

             var documentID = textToAnalyze.slice(-24);

              return MongoDB.updateWinesWithAnalyzedData(documentID, response.sentiment, response.keywords, response.entities, response.emotion)
                .then((updateddata) => {
                  //console.log("updated data", updateddata);
                })
                //reslove();
            }
          })
        }).then(() => reslove());
      }
    });
  }

module.exports.winesNLU = winesNLU;