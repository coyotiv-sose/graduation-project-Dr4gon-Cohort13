const mongoose = require('mongoose');
const config = require('dotenv').config();

const Movie = require('./src/model/aggregation/movie');
const Comment = require('./src/model/aggregation/comment');
const Theater = require('./src/model/aggregation/theater');

async function main() {
  // use ur connection string with the loaded sample data
  await mongoose.connect(
    'mongodb+srv://cohort13:0DlSgV5kGHIBaINY@cohort13.c9kc8z7.mongodb.net/sample_mflix?retryWrites=true&w=majority'
  );

  // awaited
  console.log('Connected to MongoDB');

  // Assumption: I want to build my own theater.
  // Question: Which state has the least amount of theaters?
  // await calcStateWithLeastAmountOfTheaters();

  // Find theaters with a theaterId greater than 10, limit to 10, and sort by theaterId ascending
  // SELECT theaterId FROM theaters WHERE theaterId > 10 LIMIT 10 ORDER BY theaterId ASC
  // const response2 = await Theater.find()
  //   .select({ theaterId: 1 })
  //   .where('theaterId')
  //   .gt(10)
  //   .limit(10)
  //   .sort({ theaterId: 1 });

  // await compressInformationToRelevant();

  // await changeOutputToObjects();

  // Assumption: There's a day on which movies get the best ratings, and therefore I could release my new movie there.
  // Question: Which day of the week has the best average rating?

  // const response = await Movie.aggregate([
  //   { $match: { 'imdb.rating': { $gte: 1 } } },
  //   { $sort: { 'imdb.rating': -1 } },
  //   { $limit: 5 },
  // ]);

  await calcBestDayForMovieRelease();
}

main();

async function calcBestDayForMovieRelease() {
  const response = await Movie.aggregate([
    {
      $group: { _id: { $isoDayOfWeek: '$released' }, avgRating: { $avg: '$imdb.rating' } },
    },
    { $sort: { avgRating: -1 } },
  ]);

  console.log(response);
}

async function changeOutputToObjects() {
  const response = await Theater.aggregate([
    { $group: { _id: '$location.address.state', theaters: { $push: '$theaterId' }, numberOfTheaters: { $sum: 1 } } },
    { $sort: { numberOfTheaters: -1 } },
    {
      $group: {
        _id: 1,
        stateWithMostTheaters: { $first: '$_id' },
        stateWithMostTheatersCount: { $first: '$numberOfTheaters' },
        stateWithLeastTheaters: { $last: '$_id' },
        stateWithLeastTheatersCount: { $last: '$numberOfTheaters' },
      },
    },
    {
      $project: {
        _id: 0,
        mostCrowdedState: {
          state: '$stateWithMostTheaters',
          numberOfTheaters: '$stateWithMostTheatersCount',
        },
        leastCrowdedState: {
          state: '$stateWithLeastTheaters',
          numberOfTheaters: '$stateWithLeastTheatersCount',
        },
      },
    },
  ]);

  console.log(response);
}

async function compressInformationToRelevant() {
  const response = await Theater.aggregate([
    { $group: { _id: '$location.address.state', theaters: { $push: '$theaterId' }, numberOfTheaters: { $sum: 1 } } },
    { $sort: { numberOfTheaters: -1 } },
    {
      $group: {
        _id: 1,
        stateWithMostTheaters: { $first: '$_id' },
        stateWithMostTheatersCount: { $first: '$numberOfTheaters' },
        stateWithLeastTheaters: { $last: '$_id' },
        stateWithLeastTheatersCount: { $last: '$numberOfTheaters' },
      },
    },
  ]);

  console.log(response);
}

/** Simplify with  $sortByCount: '$location.address.state' if u want to */
async function calcStateWithLeastAmountOfTheaters() {
  const response = await Theater.aggregate([
    { $group: { _id: '$location.address.state', theaters: { $push: '$theaterId' }, numberOfTheaters: { $sum: 1 } } },
    { $sort: { numberOfTheaters: -1 } },
  ]);
  console.log(response);
}
