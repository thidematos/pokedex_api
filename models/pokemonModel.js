const mongoose = require('mongoose');

const pokedexSchema = new mongoose.Schema({
  pokemonID: {
    type: String,
    required: [true, 'Por favor, adicione o pokemonID à requisição'],
  },
  userID: {
    type: String,
    required: [true, 'Por favor, adicione o userID à requisição'],
  },
  capturedAt: {
    default: Date.now,
    type: Date,
  },
});

const Pokedex = mongoose.model('Pokedex', pokedexSchema);

module.exports = Pokedex;
