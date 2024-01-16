const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const authUserSchema = new mongoose.Schema({});

class AuthUser {}

authUserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
authUserSchema.loadClass(AuthUser);
module.exports = mongoose.model('AuthUser', authUserSchema);
