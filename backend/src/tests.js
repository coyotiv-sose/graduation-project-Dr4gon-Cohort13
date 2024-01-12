const Person = require('./person.js');
const EquipmentBoard = require('./equipmentBoard.js');
const Pluralize = require('pluralize');
const DeLong = require('./delong.js');
const WetSuiteMachine = require('./wetSuiteMachine.js');

require('dotenv').config();
require('./database-connection.js');

async function runTests() {
  console.log('Namaste students, warm welcome to my riversurf academy 🏄🏾‍♂️🏄🏾‍♀️');
  // how to join Academy?
  //1) Internet 2) social interaction

  //which information is needed from user side?
  // nickname, name , weight, age, height, email, location

  // ---------- translates into the following user stories: ----------

  // User profile/login
  // User fills form with nickname, name , weight, birth date, height, email, location to register

  // let deLong = {
  //   nickName: 'deLong',
  //   name: 'deLong',
  //   age: 36,
  //   height: 1.78,
  //   weight: 70,
  //   birthDate: '1987-07-28',
  //   email: 'delong@delonghi.de',
  //   location: ['Munich'],
  //   chooseWetSuit: function (height) {
  //     if (height <= 1.5) return 'S';
  //     if (1.5 < height && height < 1.75) return 'M';
  //     if (1.75 <= height && height < 1.9) return 'L';
  //     else return 'XL';
  //   },
  // };

  let preet = await Person.create({ nickName: 'Preet', email: 'preet@gopro.com', height: 1.8 });
  let ingrid = await Person.create({ nickName: 'Ingrid', email: 'ingrid@christmas.miracle', height: 1.4 });
  let alex = await Person.create({ nickName: 'Alex', email: 'alexaa@christmas.miracle', height: 1.9 });

  console.log(preet);

  let delong = await DeLong.create({ nickName: 'Dr4gon', email: 'delong@person.de', height: 1.78 });

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
    `This is test is supposed to give back the size M for the wetsuite. Actually it does: ${WetSuiteMachine.chooseWetSuit(
      1.6
    )}`
  );

  console.log(
    `This is test for retrieving wetsuit size of ${preet.nickName} and we expect L. Preets size ${preet.askForWetSuit(
      delong
    )}`
  );

  console.log(
    `This is test for retrieving wetsuit size of ${
      ingrid.nickName
    } and we expect S. Ingrids size ${ingrid.askForWetSuit(delong)}`
  );
  console.log(
    `This is test for retrieving wetsuit size of ${alex.nickName} and we expect XL. Alexs size ${alex.askForWetSuit(
      delong
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

  // Clean up
  Person.deleteMany({});
}

runTests().then(() => console.log('All tests passed'));
