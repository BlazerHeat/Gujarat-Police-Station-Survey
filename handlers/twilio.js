const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;

const client = require('twilio')(accountSid, authToken);
const generateOtp = require('../utils/otpGen');

const IND_STD_CODE = '+91';


const sendOtp = (phoneNumber) => {
  const otp = generateOtp();

  if (process.env.NODE_ENV !== 'development') {
    client.messages
      .create({
        body: `OTP for Gujarat Police Survey is: ${otp}`,
        messagingServiceSid,
        to: IND_STD_CODE + phoneNumber
      })
      .then(() => console.log(`OTP: ${otp} sent to ${phoneNumber}`))
      .done();
  } else {
    console.log(`OTP: ${otp} sent to ${phoneNumber}`);
  }

  return otp;
}

module.exports = { sendOtp };