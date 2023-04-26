const express = require('express');
const router = express.Router();

const { Reservations } = require('../models');

router.get('/', async (req, res) => {
    const reservation = await Reservations.findAll()
    res.json(reservation);
});

router.get('/:id', async (req, res) => {
    const reservation = await Reservations.findAll()
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
      
        reservation_time: req.body.reservation_time,
        
    }
    const reservation = await Reservations.create(newreservation)
    res.status(201).send(newreservation)
});
module.exports = router;