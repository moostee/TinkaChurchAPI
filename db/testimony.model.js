let mongoose = require('mongoose');

let TestimonySchema = new mongoose.Schema({
    image : String,
    testimony : String,
    name : String
});

module.exports = mongoose.model('testimony', TestimonySchema);