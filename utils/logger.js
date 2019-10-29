let logger = require('perfect-logger');
let path = require('path');

logger.setLogDirectory(path.join(__dirname,'applicationLog'));
logger.setLogFileName("LogFile");

logger.initialize();

module.exports = logger;