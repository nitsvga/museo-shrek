var express = require('express');
var router = express.Router();

let personajes = '../public/javascripts/personajes.json'

/* GET home page. */
router.get('/', async function(req, res, next) {
    personajes = await Personaje.findAll()
    res.send(personajes);
});

router.get('/personaje', async function(req, res) {
    response = {
        nombre:req.body.nombre,
    };
});

router.post('/', async function(req, res, next) {

  res.send(usuarios)
});

router.put('/', async function(req, res, next) {

  res.send(usuarios)
});

module.exports = router;
