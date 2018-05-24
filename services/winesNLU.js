const dotenv = require('dotenv').config();
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  username: `'${process.env.username}'`,
  password: `'${process.env.password}'`,
   version_date: '2018-04-05'
});