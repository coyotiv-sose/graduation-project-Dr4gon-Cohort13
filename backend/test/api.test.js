const request = require('supertest');
const app = require('../src/app');

test('Return all users from my app successfully', async () => {
  const response = await request(app).get('/users').expect(200);
  const expectedResponse = [
    { nickName: 'Preet', email: 'preet@gopro.com' },
    { nickName: 'Ingrid', email: 'ingrid@christmas.miracle' },
    { nickName: 'Alex', email: 'alexaa@christmas.miracle' },
    { nickName: 'Dr4gon', email: 'delong@person.de' },
  ];
  console.log(response.body);
  // I expect the number of users from my db to be 4
  expect(response.body.length).toBe(4); // This will fail for u unless u have 4 users in ur db
  expect(response.body[0].nickName).toBe('Preet');
  expect(response.body).toEqual(expectedResponse);
});
