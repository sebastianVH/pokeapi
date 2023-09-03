const { Router } = require('express');
const getById = require('../controller/getPokemonById');
const postPokemon = require('../controller/postPokemon');
const getPokemonHandler = require('../controller/getPokemonHandler');

const pokemonRoutes = Router()


pokemonRoutes.get('/:idPokemon',getById)
pokemonRoutes.get('/',getPokemonHandler)
pokemonRoutes.post('/',postPokemon)

module.exports = pokemonRoutes