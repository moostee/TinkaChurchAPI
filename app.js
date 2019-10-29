let express = require('express');
let config = require('./config/config');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let addRequestId = require('express-request-id');
let routes = require('./routes/routes');
let app = express();

mongoose.connect(config.dbConnection, {useNewUrlParser : true,useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.info('we are connected to the database');
});

//Add request Id 
app.use(addRequestId);

//Body Parser.
app.use(bodyParser.json());


// 400 handler
app.use((req,res,next) =>{
    return res.status(404).send('Endpoint not found');
})
//500 handler
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname,'../public/500.html'))
})

app.listen(config.PORT , () => {console.info(`Server has started on ${config.PORT}`)});

