const request = require('supertest');
const app = require('../src/app');

test('Return all users from my app successfully', async () => {
  const response = await request(app).get('/users').expect(200);
  console.log(response.body);
  // I expect the number of users from my db to be 4
  expect(response.body.length).toBe(4); // This will fail for u unless u have 4 users in ur db
});
