const Person = require('./person');

class DeLong extends Person {
  // location = ['Herschfeld', 'Heilbronn', 'Valencia', 'Heidelberg', 'München'];

  constructor(nickName, name, age, height, weight, birthDate, email, location) {
    super(nickName, name, age, height, weight, birthDate, email, location);
  }

  chooseWetSuit = function (height) {
    if (height <= 1.5) return 'S';
    if (1.5 < height && height < 1.75) return 'M';
    if (1.75 <= height && height < 1.9) return 'L';
    else return 'XL';
  };
}

module.exports = DeLong;
