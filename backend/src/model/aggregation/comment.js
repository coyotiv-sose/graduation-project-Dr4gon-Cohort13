const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({});

class Comment {}

commentSchema.loadClass(Comment);
module.exports = mongoose.model('Comment', commentSchema);
