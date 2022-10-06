const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question: String,
    type: String,
    options: [{ id: String, text: String, checked: { type: Boolean, default: false } }],
});


module.exports = mongoose.model('questions', QuestionSchema);