const mongoose = require('mongoose');
const config = require('dotenv').config();

const Movie = require('./model/aggregation/movie');
const Comment = require('./model/aggregation/comment');
const Theater = require('./model/aggregation/theater');

// use ur connection string with the loadad sample data
mongoose
  .connect('')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Could not connect to MongoDB', err));

async function main() {
  // console.log(await Movie.find().limit(5));
  // console.log(await Comment.find().limit(5));
  console.log(await Theater.find().limit(5));
}

main();
