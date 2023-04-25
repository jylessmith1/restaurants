var express = require('express');
var router = express.Router();
const { menuItems } = require('../models');

router.get('/', async (req, res) => {
    const menuItem = await menuItems.findAll()
    res.json(menuItem);

});
router.get('/:id', async (req, res) => {
    const menuItem = await menuItems.findAll()
    const { id } = req.params

    menuItem.forEach(Item => {
        if(id == Item.id) {
            res.json(Item)
        }
    });
    res.json(menuItems);
    console.log(id)

});

router.post('/', async (req, res) => {
    const menuItem = await menuItems.findAll()
    const newMenuItem = {
        name: req.body.name,
        price: req.body.price 
    }
    menuItem.push(newMenuItem)
})

module.exports = router;