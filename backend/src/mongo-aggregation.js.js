const mongoose = require('mongoose');
const config = require('dotenv').config();

const Movie = require('./model/aggregation/movie');

// use ur connection string with the loadad sample data
mongoose
  .connect('')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Could not connect to MongoDB', err));

async function main() {
  console.log(await Movie.find().limit(5));
}

main();
