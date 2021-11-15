var express = require('express');
var router = express.Router();

const db = require('../models')
const Usuario = db.usuarios

/* GET users listing. */
router.get('/', async function(req, res, next) { 
  let usuarios = await Usuario.findAll()
  res.send(usuarios);
});

router.post('/', async function(req, res, next) {

  res.send(usuarios)
});

router.put('/', async function(req, res, next) {

  res.send(usuarios)
});

module.exports = router;