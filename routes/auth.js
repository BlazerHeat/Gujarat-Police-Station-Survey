const express = require('express');
const router = express.Router();
const twilio = require('../handlers/twilio');
const { addOtp, getOtp, removeOtp } = require('../handlers/otp');

router.post('/sendotp', (req, res) => {
    const { phoneNum } = req.body;

    const otp = twilio.sendOtp(phoneNum);

    addOtp(phoneNum, otp);

    res.status(202).send('OTP SENT!');
});

router.post('/verifyotp', async (req, res) => {
    const userOtp = req.body.otp;
    const { phoneNum } = req.body;


    if (!phoneNum) {
        res.status(400).send('RETRY');
        return;
    }


    const otp = await getOtp(phoneNum) || null;

    if (!otp) {
        res.status(408).send('OTP_EXPIRED');
        return;
    }

    if (parseInt(otp) == parseInt(userOtp)) {
        await removeOtp(phoneNum);
        res.status(202).send('APRROVED');
    } else {
        res.status(401).send('REJECTED');
    }
});

module.exports = router;