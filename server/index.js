const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const dotenv = require('dotenv');
const path = require('path');

/* Initialize Express */
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(__dirname + '/../client/dist'));


let getMovieData = () => {

  var options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    qs:
     { page: '1',
       include_video: 'false',
       include_adult: 'false',
       sort_by: 'popularity.desc',
       language: 'en-US',
       api_key: '6f0f6ccafaaff428439efd8e3edd254a'
     },
    body: '{}' };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(JSON.parse(body));
  });

}

getMovieData();



app.get('*', function(req, res) {
 // console.log('serving default route')
 res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});



app.listen(3000, () => {
  console.log('listening on port 3000');
});