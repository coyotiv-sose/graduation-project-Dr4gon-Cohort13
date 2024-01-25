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
  await calcStateWithLeastAmountOfTheaters();
}

main();

async function calcStateWithLeastAmountOfTheaters() {
  const response = await Theater.aggregate([
    { $group: { _id: '$location.address.state', theaters: { $push: '$theaterId' }, numberOfTheaters: { $sum: 1 } } },
    { $sort: { numberOfTheaters: -1 } },
  ]);
  console.log(response);
}
