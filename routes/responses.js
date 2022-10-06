const express = require('express');
const router = express.Router();
const responses = require('../database/models/response');


router.post('/', async (req, res) => {
    const { phoneNum, name, ...rest } = req.body;

    console.log(rest);

    await new responses({ phoneNum, name, response: rest }).save();

    res.status(200).end();
})

module.exports = router;