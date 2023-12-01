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

let preet = {
  nickName: 'Preet',
  name: 'Gupreetx',
  age: 33,
  height: 1.78,
  weight: 80,
  birthDate: '1990-12-06',
  email: 'preet@gopro.com',
  location: ['Munich', 'Hannover'],
};

let Ingrid = {
  nickName: 'Ingrid',
  name: 'Ingrid',
  age: 90,
  height: 1.4,
  weight: 174,
  birthDate: '1933-12-24', // Date
  email: 'ingrid@christmas.miracle',
  location: ['Berlin'],
};

let alex = {
  nickName: 'Alex',
  name: 'Alex',
  age: 15,
  height: 1.9,
  weight: 60,
  birthDate: '2008-12-24', // Date
  email: 'alexaa@christmas.miracle',
  location: ['BadHomburg'],
};

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
};

const floßlaende = {
  location: 'Munich',
  level: ['beginner', 'advanced'],
  community: 'friendly',
  openingHours: '6AM-18PM',
  price: 0,
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
  `This is test for retrieving wetsuit size of Preet and we expect L. Preets size ${deLong.chooseWetSuit(
    preet['height']
  )}`
);
console.log(
  `This is test for retrieving wetsuit size of Ingrid and we expect S. Ingrids size ${deLong.chooseWetSuit(
    Ingrid['height']
  )}`
);
console.log(
  `This is test for retrieving wetsuit size of Alex and we expect XL. Alexs size ${deLong.chooseWetSuit(
    alex['height']
  )}`
);
