const Person = require('./person.js');
const EquipmentBoard = require('./equipmentBoard.js');
const Pluralize = require('pluralize');

console.log('Namaste students, warm welcome to my riversurf academy 🏄🏾‍♂️🏄🏾‍♀️');
// how to join Academy?
//1) Internet 2) social interaction

//which information is needed from user side?
// nickname, name , weight, age, height, email, location

// ---------- translates into the following user stories: ----------

// User profile/login
// User fills form with nickname, name , weight, birth date, height, email, location to register

let deLong = {
  nickName: 'deLong',
  name: 'deLong',
  age: 36,
  height: 1.78,
  weight: 70,
  birthDate: '1987-07-28',
  email: 'delong@delonghi.de',
  location: ['Munich'],
  chooseWetSuit: function (height) {
    if (height <= 1.5) return 'S';
    if (1.5 < height && height < 1.75) return 'M';
    if (1.75 <= height && height < 1.9) return 'L';
    else return 'XL';
  },
};

let preet = new Person('Preet', 'Gupreet', 33, 1.78, 80, '1990-12-06', 'preet@gopro.com', ['Munich', 'Hannover']);
let ingrid = new Person('Ingrid', 'Ingrid', 90, 1.4, 174, '1933-12-24', 'ingrid@christmas.miracle', ['Berlin']);
let alex = new Person('Alex', 'Alex', 15, 1.9, 60, '2008-12-24', 'alexaa@christmas.miracle', ['Bad Homburg']);

/* {
  nickName: 'Alex',
  name: 'Alex',
  age: 15,
  height: 1.9,
  weight: 60,
  birthDate: '2008-12-24', // Date
  email: 'alexaa@christmas.miracle',
  location: ['BadHomburg'],
  askForWetSuit: function () {
    return deLong.chooseWetSuit(this.height);
  },
}; */
/* {
  nickName: 'Preet',
  name: 'Gupreetx',
  age: 33,
  height: 1.78,
  weight: 80,
  birthDate: '1990-12-06',
  email: 'preet@gopro.com',
  location: ['Munich', 'Hannover'],
  askForWetSuit: function () {
    return deLong.chooseWetSuit(this.height);
  },
}; */

/* let Ingrid = {
  nickName: 'Ingrid',
  name: 'Ingrid',
  age: 90,
  height: 1.4,
  weight: 174,
  birthDate: '1933-12-24', // Date
  email: 'ingrid@christmas.miracle',
  location: ['Berlin'],
  askForWetSuit: function () {
    return deLong.chooseWetSuit(this.height);
  },
}; */

// User can login with nickname and password
// User can join community
// User can see his or another profile
// User is able to upload video
// User is able to delete account
// User updates his profile

//what is needed?
//1) wet suit 2) board 3) helmet and west (optional)

// ---------- translates into the following user stories: ----------

// Basic equipment for riversurfing
// User can see diffent suits and pick one according to their fit and the season they want to surf in
// User can see different boards and pick one according to their fit
// User can check sizes for helmet and west

const wetSuit = {
  name: 'bomb',
  size: ['S', 'M', 'L', 'XL', 'XXL', 'XXXXL'],
  color: ['black', 'blue', 'red'],
  season: ['summer', 'winter'],
  price: 200,
  brand: 'RipCurl',
};

const board = {
  modelName: 'Shark',
  brand: 'Wuux',
  length: [4.1, 5.0, 5.3, 5.4],
  type: ['soft', 'hard'],
};

const tuna = new EquipmentBoard('Tuna', 'Wuux', 4.5, 'soft');
tuna._internalTypeOfMaterial = 'foam';
const fingerling = new EquipmentBoard('Shark', 'Speedo', 5.0, 'hard');

// levels
// beginner => to be able to stand on a board
// advanced =>  to be able to turn with a board
// pro  => to be able to do tricks on board in any kind of situation
// community
//  friendly , arrogant
//which type of Board is suggested for beginners
// depends on wave
//opening hours

// ---------- translates into the following user stories: ----------

// User filters wave level to pick the right wave for the start
// User is shown friendly community, and board suggestions
// User is able to look opening hours of the riverwave

const eisbach = {
  location: 'Munich',
  level: ['advanced', 'pro'],
  community: 'arrogant',
  openingHours: '24/7',
  price: 0,
  attendances: [],
};

const flosslaende = {
  location: 'Munich',
  level: ['beginner', 'advanced'],
  community: 'friendly',
  openingHours: '6AM-18PM',
  price: 0,
  attendances: [],
};

// User flow

// determine what wet suits is good for preet
// function chooseWetSuit(height) {
//   if (height <= 1.5) return 'S';
//   if (1.5 < height && height < 1.75) return 'M';
//   if (1.75 <= height && height < 1.9) return 'L';
//   else return 'XL';
// }

console.log(`------------------------------ Wetsuite Tests -------------------------------------------------`);

console.log(
  `This is test is supposed to give back the size M for the wetsuite. Actually it does: ${deLong.chooseWetSuit(1.6)}`
);

console.log(
  `This is test for retrieving wetsuit size of ${preet.nickName} and we expect L. Preets size ${preet.askForWetSuit(
    deLong
  )}`
);

console.log(
  `This is test for retrieving wetsuit size of ${ingrid.nickName} and we expect S. Ingrids size ${ingrid.askForWetSuit(
    deLong
  )}`
);
console.log(
  `This is test for retrieving wetsuit size of ${alex.nickName} and we expect XL. Alexs size ${alex.askForWetSuit(
    deLong
  )}`
);

console.log(`------------------------------ Equipment Board Tests -------------------------------------------------`);
console.log('Verify that Tuna is created: ' + tuna.info);
console.log('Verify that Tuna board is from brand Wuux: ' + tuna.brand);
console.log('Verify that Tun has 4.5 length: ' + tuna.length);
console.log('Verify that Fingerling is created: ' + fingerling.info);
console.log('Verify that Fingerling is a hard top board: ' + fingerling.type);
console.log('Verify that Fingerling is named Shark model: ' + fingerling.modelName);

console.log(`------------------------------ Wave attandences -------------------------------------------------`);
eisbach.attendances.push('Gulistan');
console.log('Add a person to eisbach wave to surf ' + eisbach.attendances);
console.log('1 person is should be surfing on eisbach wave ' + eisbach.attendances.length + ' surfer');

flosslaende.attendances.push('Delong', 'Alex');
console.log('Add two person to flosslaende wave to surf ' + flosslaende.attendances);

// pluralize('test', 1, true) //=> "1 test"
// const test = Pluralize('test', 1);
// console.log(test);
console.log(
  'There should be two people on flosslaende wave now. There ARE: ' +
    Pluralize('surfer', flosslaende.attendances.length, true)
);

flosslaende.attendances.pop();

console.log(
  'There should be 1 people on flosslaende wave now. There ARE: ' +
    Pluralize('surfer', flosslaende.attendances.length, true)
);

flosslaende.attendances.push('Preet', 'Ingrid', 'Gulistan', 'Delong', 'Alex');

console.log(
  'There should be 6 people on flosslaende wave now. There ARE: ' +
    Pluralize('surfer', flosslaende.attendances.length, true)
);

var arr = ['Cat', 'Apple', 'Banana', 'Dog'];
console.log(arr.toSorted());
