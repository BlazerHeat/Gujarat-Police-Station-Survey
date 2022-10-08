const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    phoneNum: String,
    name: String,
    buckleNumber: String,
    response: Object
});


module.exports = mongoose.model('responses', ResponseSchema);