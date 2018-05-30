const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const ObjectId = mongoose.Types.ObjectId;

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
  sentiment : {},
  keywords : [],
  entities : [],
  emotion : {}
});

let Wines = mongoose.model('Wines', wineSchema);


let saveWines =  (allwines) => {
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

// this method is used in winesNUL to retrive entire wines collection that eventually gets passed to Waston NLU.
let retriveWines = (cb) => {
  try {
  // Even though we have delay setup in order to avoid IBM Waston API rate limit - 429 error, not all X documents are being updated at one go, so for the ones that don't get updated, please execute the winesNUL service again by finding all the documents that don't have "emotion" data.
   return Wines.find({ "emotion": { "$in": [ null, {} ] } }).exec()
   // return Wines.find({}).limit(10).exec()
      // .then((wines) => {
      //   console.log(wines);
      //   cb(wines);
      // })
      .catch((err) => {
        console.log("error retriving wines data", err);
      })
  }
  catch(err) {
    return res.status(500).send(err);
  }
}

let getWinesQuery = (query, cb) => {
  Wines.find({"name": {"$regex": `${query}`, "$options": "i"}}, (err, wines) => {
    if (err) {
      console.error('Get wine query error: ', err);
    } else {
      cb(wines);
    }
  })
}

let updateWinesWithAnalyzedData = (id, sentiment, keywords, entities,emotion) => {
  try {
    return Wines.findByIdAndUpdate({ _id : id}, {sentiment : { sentiment }, keywords : [keywords], entities : [ entities ], emotion : { emotion } } )
    .then((wines) => {
      console.log("wine id updated", id)
      return wines;
    })
    .catch((err) => {
      console.log("error updating wines data", err);
    })
  }
  catch(err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      res.status(409).send(new MyError('Duplicate key', [err.message]));
    }
    res.status(500).send(new MyError('Unknown Server Error', ['Unknow server error when updating wines data ']));
  }
}

let retrivePopularWines = (cb) => {
  try {
    return Wines.find({"description": { "$nin": null }}).limit(10).exec()
      .then((wines) => {
        cb(wines);
      })
      .catch((err) => {
        console.log("error displaying top 10 wines", err);
      })
  }
  catch(err) {
    return res.status(500).send(err);
  }
}


let movieSchema = mongoose.Schema({
  vote_count: Number,
  id: Number,
  vote_average: Number,
  title: String,
  popularity: Number,
  poster_path: String,
  overview: String,
  backdrop_path: String,
  release_date: String
})

let Movies = mongoose.model('Movies', movieSchema);


let saveMovies = (allmovies, cb) => {

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

let getMovies = (cb) => {
  Movies.find().exec((err, movies) => {
    if (err) {
      console.error('Get movies error: ', err);
    } else {
      cb(movies);
    }
  })
}

let getMoviesQuery = (query, cb) => {
  Movies.find({"title": {"$regex": `${query}`, "$options": "i"}}, (err, movies) => {
    if (err) {
      console.error('Get movie query error: ', err);
    } else {
      cb(movies);
    }
  })
}

let getPopularMovies = (cb) => {
  Movies.find().limit(10).exec((err, movies) => {
    if (err) {
      console.error('Get movies error: ', err);
    } else {
      cb(movies);
    }
  })
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
module.exports.retriveWines = retriveWines;
module.exports.updateWinesWithAnalyzedData = updateWinesWithAnalyzedData;
module.exports.getMovies = getMovies;
module.exports.getMoviesQuery = getMoviesQuery;
module.exports.getWinesQuery = getWinesQuery;
module.exports.retrivePopularWines = retrivePopularWines;
module.exports.getPopularMovies = getPopularMovies;