const mongoose = require('mongoose');

mongoose.connect('mongodb://loccalhost/noderrest', { useMongoClient: true});
mongoose.Promise = global.Promise

module.exports = mongoose;

