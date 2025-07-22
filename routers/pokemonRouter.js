const express = require('express');
const pokedexController = require('./../controllers/pokedexController');

const router = express.Router();

router.get('/:userID', pokedexController.getPokedexEntry);
router.post('/', pokedexController.createPokedexEntry);
router.delete('/:userID/:pokemonID', pokedexController.deletePokedexEntry);

module.exports = router;
