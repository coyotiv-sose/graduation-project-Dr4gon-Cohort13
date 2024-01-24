const mongoose = require('mongoose');
const config = require('dotenv').config();

const Movie = require('./model/aggregation/movie');
const Comment = require('./model/aggregation/comment');
const Theater = require('./model/aggregation/theater');

async function main() {
  // use ur connection string with the loaded sample data
  await mongoose.connect(
    'mongodb+srv://cohort13:0DlSgV5kGHIBaINY@cohort13.c9kc8z7.mongodb.net/sample_mflix?retryWrites=true&w=majority'
  );

  console.log('Connected to MongoDB');

  // console.log(await Movie.find().limit(5));
  // console.log(await Comment.find().limit(5));
  // console.log(await Theater.find().limit(5));

  // await calcMoviesWithBestRating();

  // const response = await getStatesSortedByTheater();

  const response = await Movie.aggregate([
    {
      $group: { _id: { $isoDayOfWeek: '$released' }, avgRating: { $avg: '$imdb.rating' } },
    },
    { $sort: { avgRating: -1 } },
  ]);

  console.log(response);
}

async function getStatesSortedByTheater() {
  return await Theater.aggregate([
    { $group: { _id: '$location.address.state', theaters: { $push: '$theaterId' }, numberOfTheaters: { $sum: 1 } } },
    { $sort: { numberOfTheaters: -1 } },
  ]);
}

async function calcMoviesWithBestRating() {
  const response = await Movie.aggregate([
    { $match: { 'imdb.rating': { $gt: 1 } } },
    { $sort: { 'imdb.rating': -1 } },
    { $limit: 5 },
  ]);

  console.log(response);
}

main();
