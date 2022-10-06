require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.validationRequests
    .create({ friendlyName: 'Testing', phoneNumber: '+917203088769' })
    .then(validation_request => console.log(validation_request.friendlyName)).done();