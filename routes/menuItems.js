const express = require('express');
const router = express.Router();
const { MenuItems } = require('../models');

router.get('/', async (req, res) => {
    const MenuItem = await MenuItems.findAll()
    res.json(MenuItem);
});

router.get('/:id', async (req, res) => {
    const MenuItem = await MenuItems.findAll()
    const { id } = req.params

    MenuItem.forEach(Item => {
        if(id == Item.id) {
            res.json(Item)
        }
    });
    res.json(MenuItems);
    console.log(id)

});

router.post('/', async (req, res) => {
    const newMenuItem = {
        name: req.body.name,
        price: req.body.price 
    }
    const MenuItem = await MenuItems.create(newMenuItem)
    res.status(201).send(newMenuItem)
})


module.exports = router;