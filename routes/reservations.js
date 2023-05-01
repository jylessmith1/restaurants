const express = require('express');
const router = express.Router();

const { Reservation } = require('../models');

router.get('/', async (req, res) => {
    const reservation = await Reservation.findAll()
    res.json(reservation);
});

router.get('/:id', async (req, res) => {
    const reservation = await Reservation.findAll()
    const { id } = req.params

    reservation.forEach(Item => {
        if(id == Item.id) {
            res.json(Item)
        }
    });
    res.json(reservation);
    console.log(id)

});

router.post('/', async (req, res) => {
    const newreservation = {

      time: req.body.time,
        
    }
    const reservation = await Reservation.create(newreservation)
    res.status(201).send(newreservation)
});
module.exports = router;