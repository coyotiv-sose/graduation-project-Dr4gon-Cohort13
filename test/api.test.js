const request = require('supertest');
const app = require('../src/app');

test('Return all users from my app successfully', async () => {
  const response = await request(app).get('/users').expect(200);
  // const expectedResult = false;
  // expect(response.body.isValid).toBe(expectedResult);
});
