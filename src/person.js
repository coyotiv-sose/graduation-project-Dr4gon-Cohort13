class Person {
  nickName;
  name;
  age;
  threeEyes;
  birthdate;
  height;
  email;
  location; // A composition: A person needs a location
  heart; // A composition: A person needs a heart
  eyesight; // Aggregation: A person has eyesight
  partner; // Association: A person may have a partner, but doesn't need one to live

  constructor(nickName, name, age, height, weight, birthdate, email, location) {
    this.nickName = nickName;
    this.name = name;
    this.age = age;
    this.height = height;
    this.birthdate = birthdate;
    this.email = email;
    // Robustness principle
    // Goal: Whatever input a user gives, the program should not crash
    // HowTo: The software craftperson makes sure to handle even unexpected input
    // Important criteria: Edge cases, and very stupid cases such as empty
    // --------------------------------------------------------------------------
    // console.log(location);
    // console.log(typeof 'Munich' === 'string');
    if (location === undefined || location === '') {
      throw new Error('Location must be set');
    }

    if (typeof location === 'string') {
      this.location = [location];
    } else {
      throw Error('Location must be a string');
    }

    this.weight = weight;
  }

  get nickName() {
    return this.nickName;
  }
  get name() {
    return this.name;
  }
  get age() {
    return this.age;
  }
  get height() {
    return this.height;
  }
  get email() {
    return this.email;
  }
  get location() {
    return this.location;
  }

  askForWetSuit(expert) {
    return expert.chooseWetSuit(this.height);
  }
}

module.exports = Person; // exposes this class = Person to the module scope
