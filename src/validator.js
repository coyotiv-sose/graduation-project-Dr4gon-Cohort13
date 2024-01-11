// Description: Validator class

class Validator {
  static validatePassword(password) {
    if (password.length >= 8) {
      return true;
    }

    if (password.includes('*')) {
      return true;
    }

    return false;
  }
}

module.exports = Validator;
