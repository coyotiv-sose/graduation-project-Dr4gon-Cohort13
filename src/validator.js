// Description: Validator class

// Test2: '12*45678'
class Validator {
  static validatePassword(password) {
    // [everything within her is tested]
    // +: one or more
    const ruleSet = `[*!?]+`;
    if (password.length >= 8 && password.match(ruleSet)) {
      return true;
    }

    return false;
  }
}

module.exports = Validator;
