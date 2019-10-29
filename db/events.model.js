let mongoose = require('mongoose');

let EventsSchema = new mongoose.Schema({
    image : String,
    title : String,
    eventDate : Date,
    DateAdded : Date,
    summary : {
        type: String,
        maxlength : 450
    }
});

module.exports = mongoose.model('events', EventsSchema);