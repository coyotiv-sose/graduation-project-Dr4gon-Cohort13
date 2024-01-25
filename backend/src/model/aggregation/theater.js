const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({});

class Theater {}

theaterSchema.loadClass(Theater);
module.exports = mongoose.model('Theater', theaterSchema);
