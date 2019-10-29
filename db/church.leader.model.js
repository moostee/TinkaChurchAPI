let mongoose = require('mongoose');

let ChurchLeaderSchema = new mongoose.Schema({
    name : String,
    image : String,
    role : {
        type : String,
        maxlength : 40
    },
    aboutMe : {
        type : String,
        maxlength : 100
    }
});

module.exports = mongoose.model('churchLeaders', ChurchLeaderSchema);

