const otpGenerator = require('otp-generator');
const { OTP_LENGTH, ...restConfig } = require('config').get('otpConfig');


const generateOtp = () => {
    return otpGenerator.generate(OTP_LENGTH, restConfig);
}

module.exports = generateOtp;