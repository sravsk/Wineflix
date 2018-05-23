const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let wineSchema = mongoose.Schema({
  // TODO: your schema here!
});

let Wine = mongoose.model('Wine', wineSchema);

let movieSchema = mongoose.Schema({

})

let Movie = mongoose.model('Movie', movieSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;