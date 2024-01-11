const Validator = require('../src/validator');

test('If the password is empty, the validation should fail', () => {
  const actualResult = Validator.validatePassword('');
  const expectedResult = false;
  expect(actualResult).toBe(expectedResult);
});

test('If the password is minimum 8 characters, the validation should succeed', () => {
  const actualResult = Validator.validatePassword('12345678');
  const expectedResult = true;
  expect(actualResult).toBe(expectedResult);
});
