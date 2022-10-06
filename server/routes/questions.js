const express = require('express');
const router = express.Router();
const Questions = require('../database/models/questions');


router.get('/', async (req, res) => {
    const data = await Questions.find();

    res.status(200).send(JSON.stringify(data, null, 2));
});


router.post('/', (req, res) => {
    const { question, type, options } = req.body;

    if (!question || !type || !options) {
        res.status(400).send('Invaild query params');
        return;
    }

    res.status(102);
    new Questions({ question, type, options }).save().then(() => {
        res.status(201).send('Question added successfully!');
    }).catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Questions.remove({ _id: id }).then(() => {
        res.status(202).send('Deleted!');
    }).catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});


module.exports = router;