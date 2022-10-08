const express = require('express');
const router = express.Router();
const Responses = require('../database/models/response');


router.get('/', async (req, res) => {
    const data = await Responses.find();

    res.status(200).json({ responses: data });
})


router.post('/', async (req, res) => {
    const { phoneNum, name, buckleNumber, ...rest } = req.body;

    console.log(rest);

    await new Responses({ phoneNum, name, buckleNumber, response: rest }).save();

    res.status(200).end();
})

module.exports = router;