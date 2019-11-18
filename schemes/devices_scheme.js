var mongoose = require('mongoose');

var devicesScheme = mongoose.Schema({
    //_id: ObjectId,
    name: String,
    serial: String,
    description: String,
    category: Number,
    state: Boolean
});

var devicesModel = mongoose.model('devices', devicesScheme);

module.exports = devicesModel;