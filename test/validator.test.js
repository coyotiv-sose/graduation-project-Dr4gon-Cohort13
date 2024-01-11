const Validator = require('../src/validator');

test('If the password is empty, the validation should fail', () => {
  const actualResult = Validator.validatePassword('');
  const expectedResult = false;
  expect(actualResult).toBe(expectedResult);
});

test('If the password greater than 8 characters, the validation should succeed', () => {
  const actualResult = Validator.validatePassword('12*45678');
  const expectedResult = true;
  expect(actualResult).toBe(expectedResult);
});

test('If the password smaller than 8 characters, the validation should fail', () => {
  const actualResult = Validator.validatePassword('1234');
  const expectedResult = false;
  expect(actualResult).toBe(expectedResult);
});

test('The password must have * to be valid', () => {
  const actualResult2 = Validator.validatePassword('123456789*');
  const expectedResult2 = true;
  expect(actualResult2).toBe(expectedResult2);
});
