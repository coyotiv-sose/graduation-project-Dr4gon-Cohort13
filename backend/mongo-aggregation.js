const mongoose = require('mongoose');
const config = require('dotenv').config();

const Movie = require('./src/model/aggregation/movie');
const Comment = require('./src/model/aggregation/comment');
const Theater = require('./src/model/aggregation/theater');

async function main() {
  // use ur connection string with the loaded sample data
  await mongoose.connect('');

  // awaited
  console.log('Connected to MongoDB');

  // Assumption: The US has 300 theaters
  // Question: How many theaters are there in the US?
  const response = await Theater.find();
  console.log(response);
}

main();
