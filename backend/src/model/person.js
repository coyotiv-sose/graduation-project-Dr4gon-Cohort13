const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const personSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
});

class Person {
  askForWetSuit(expert) {
    return expert.chooseWetSuit(this.height);
  }
}

personSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
personSchema.loadClass(Person);
module.exports = mongoose.model('Person', personSchema);
