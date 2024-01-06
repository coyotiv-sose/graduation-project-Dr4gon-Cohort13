const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

class Person {
  askForWetSuit(expert) {
    return expert.chooseWetSuit(this.height);
  }
}

personSchema.loadClass(Person);
module.exports = mongoose.model('Person', personSchema);
