class Person {
  nickName;
  name;
  age;
  height;
  email;
  location; // A composition: A person needs a location
  heart; // A composition: A person needs a heart
  eyesight; // Aggregation: A person has eyesight
  partner; // Association: A person may have a partner, but doesn't need one to live

  constructor(nickName, name, age, height, email, location) {
    this.nickName = nickName;
    this.name = name;
    this.age = age;
    this.height = height;
    this.email = email;
    this.location = location;
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
