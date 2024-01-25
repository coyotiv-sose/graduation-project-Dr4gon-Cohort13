const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({});

class Movie {}

movieSchema.loadClass(Movie);
module.exports = mongoose.model('Movie', movieSchema);
