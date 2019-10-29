let logger = require('./logger');
class Utilities
{
    FinalResponse(requestId, data) {
        return {
            requestId: requestId,
            responseMessage: 'Successful',
            responseCode: '00',
            data: data
        }
    }
    
    UnsuccessfulResponse(requestId, message){
        return {
            requestId: requestId,
            responseCode: '33',
            responseMessage: message
        }
    }
    
    ExceptionResponse(requestId, err){
        return {
            requestId: requestId,
            responseMessage: 'An Error occured while processing your request',
            responseCode: '99',
            data: err
        }
    }
    
    WriteLog(requestId, request, response){
        logger.info({
            RequestId: requestId,
            RequestTo: request.route,
            Response: response,
            Error: null
        })
    }
    
    WriteError(requestId, request, err){
        logger.crit({
            RequestId: requestId,
            RequestTo: request.route,
            Response: null,
            Error: err
        })
    }

}

module.exports = Utilities;
