const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect('mongodb://localhost/wines-movies');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', function(){
  console.log('wines-movies db connected');
});



let wineSchema = mongoose.Schema({
  id : {type : Number, unique : true},
  name : String,
  tags : String,
  primary_category : String,
  secondary_category : String,
  producer_name : String,
  is_dead : [Boolean],
  description : String,
  serving_suggestion : String,
  tasting_note : String,
  image_thumb_url : String,
  image_url : String,
  varietal : String,
  product_no : Number,
  date_Created : Date
});

let Wines = mongoose.model('Wines', wineSchema);

let saveWines =  (allwines, cb) => {

  try {
    Wines.insertMany(allwines)
    .then((wine) => {
      console.log("wines data saved to db", wine);
    })
    .catch((err) => {
      console.log("error saving data to wines collection", err)
    })
  }

  catch(err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      res.status(409).send(new MyError('Duplicate key', [err.message]));
    }
    res.status(500).send(err);
  }

}



let movieSchema = mongoose.Schema({
  id: Number,
  title: String,
  popularity: Number,
  vote_avg: Number,
  vote_count: Number,
  overview: String,
  poster_path: String,
  backdrop_path: String
})

let Movie = mongoose.model('Movie', movieSchema);

let saveMovies  = () => {

}

module.exports.saveWines = saveWines;
module.exports.saveMovies = saveMovies;