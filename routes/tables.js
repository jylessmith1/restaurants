var express = require('express');
var router = express.Router();

const { Tables } = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async(req, res) => {
  const newTable = {
      name: req.body.name
  }
  await Tables.create(newTable)
  res.status(201).send(newTable)
  
  // Tables.create({
  //   name: req.body.name
  
  // })
  // .then((data)=>res.status(200).send(data))
  // .catch((error)=>res.status(400).send(error))

})

module.exports = router;