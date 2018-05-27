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
  vote_count: Number,
  id: Number,
  vote_avg: Number,
  title: String,
  popularity: Number,
  poster_path: String,
  overview: String,
  backdrop_path: String
})

let Movies = mongoose.model('Movies', movieSchema);


let saveMovies  = (allmovies, cb) => {

   try {
    Movies.insertMany(allmovies)
    .then((movie) => {
      console.log("movies data saved to db", movie);
    })
    .catch((err) => {
      console.log("error saving data to movies collection", err)
    })
  }

  catch(err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      res.status(409).send(new MyError('Duplicate key', [err.message]));
    }
    res.status(500).send(err);
  }

}

let userSchema = mongoose.Schema({
  id : {type : Number, unique : true},
  username: String,
  password: String
});
userSchema.set('autoIndex', false);

let User = mongoose.model('User', userSchema);

let checkUser = (username, cb) => {
  var query  = User.where({ username: username });
  query.findOne(function (err, user) {
  if (err) return handleError(err);
  if (user) {
    // doc may be null if no document matched
    // console.log(user);
    cb(true);
  }
  else {cb(false);}
});

}

let saveUser = (username, password) => {
  var newUser = new User({username: username, password: password});
  newUser.save(err=>{
    if (err) {console.log(err);}
    console.log(username + ' saved to database');
  })

}



module.exports.saveWines = saveWines;
module.exports.saveMovies = saveMovies;
module.exports.checkUser = checkUser;
module.exports.saveUser = saveUser;