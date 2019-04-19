const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quizSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    options : [
        {option: {type: String, required: true}},
        {option: {type: String, required: true}},
        {option: String},
        {option: String}
    ],
    answer: {type: String, required: true}
})

module.exports = Quiz = mongoose.model('Quiz', quizSchema);
