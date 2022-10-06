const otpGenerator = require('otp-generator');
const { OTP_LENGTH, ...restConfig } = {
    "OTP_LENGTH": 4,
    "digits": true,
    "lowerCaseAlphabets": false,
    "upperCaseAlphabets": false,
    "specialChars": false,
    "OTP_LIFE": 120
};


const generateOtp = () => {
    return otpGenerator.generate(OTP_LENGTH, restConfig);
}

module.exports = generateOtp;