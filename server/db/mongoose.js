var mongoose = require('mongoose');

//mongoose supports callbacks but not promises. Tell it what promise library to use
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}; 