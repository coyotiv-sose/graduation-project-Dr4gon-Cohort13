const Validator = require('../src/validator');

test('If the password is empty, the validation should fail', () => {
  const actualResult = Validator.validatePassword('');
  const expectedResult = false;
  expect(actualResult).toBe(expectedResult);
});
