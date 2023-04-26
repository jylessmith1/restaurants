const express = require('express');
const router = express.Router();
const { Employees } = require('../models');

router.get('/', async (req, res) => {
    const employee = await Employees.findAll()
    res.json(employee);
});

router.get('/:id', async (req, res) => {
    const employee = await Employees.findAll()
    const { id } = req.params

    employee.forEach(Item => {
        if(id == Item.id) {
            res.json(Item)
        }
    });
    res.json(employee);
    console.log(id)

});

router.post('/', async (req, res) => {
    const newemployee = {
        first_name: req.body.first_name,
        last_name: req.body.last_name 
    }
    const employee = await Employees.create(newemployee)
    res.status(201).send(newemployee)
});
module.exports = router;