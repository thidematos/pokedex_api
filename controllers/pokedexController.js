const catchAsync = require('../utils/catchAsync');
const Pokedex = require('./../models/pokemonModel');

exports.createPokedexEntry = catchAsync(async (req, res, next) => {
  const newPokemon = await Pokedex.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      pokemon: newPokemon,
    },
  });
});

exports.getPokedexEntry = catchAsync(async (req, res, next) => {
  const id = req.params.userID;

  const pokemons = await Pokedex.find({ userID: id });

  res.status(200).json({
    status: 'success',
    results: pokemons.length,
    data: {
      pokemon: pokemons,
    },
  });
});

exports.deletePokedexEntry = catchAsync(async (req, res, next) => {
  const { pokemonID, userID } = req.params;

  await Pokedex.findOneAndDelete({ pokemonID: pokemonID, userID: userID });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
