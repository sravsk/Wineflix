const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let wineSchema = mongoose.Schema({
  // TODO: your schema here!
});

let Wine = mongoose.model('Wine', wineSchema);

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

let save = () => {

}

module.exports.save = save;