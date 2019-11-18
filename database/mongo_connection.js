var mongoose = require('mongoose');

//mongo connection
var mongoUrl = 'mongodb://localhost:27017/trackapp';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', () => console.log('Error Connecting ...'));
db.once('open', () => console.log('Mongo Connected'));

module.exports = db;