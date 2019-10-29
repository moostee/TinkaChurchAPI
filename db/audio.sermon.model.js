let mongoose = require('mongoose');

let AudioSermonSchema = new mongoose.Schema({
    image : String,
    title : String,
    author : {
        type : String,
        maxlength : 40
    },
    dateAdded : Date,
    audioPath : String
});

module.exports = mongoose.model('audioSermons', AudioSermonSchema);