const mongoose = require("mongoose");
const URI = require("./mongoConnect");

mongoose.connect(URI);
mongoose.Promise = global.Promise;

module.exports = mongoose;
