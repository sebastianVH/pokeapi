const { Router } = require('express');
const getById = require('../controller/getPokemonById');
const getAllPokemons = require('../controller/getAllPokemons');
const getByName = require('../controller/getByName');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons/:idPokemon',getById)
router.get('/pokemons',getAllPokemons)
router.get('/pokemons?name=cubone',(req,res)=>res.status(200).json({message:"Ok by Name"}))


module.exports = router;
