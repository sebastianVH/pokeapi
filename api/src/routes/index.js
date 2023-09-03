const { Router } = require('express');
const typeRoutes = require('./typesRoutes');
const pokemonRoutes = require('./pokemonRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons',pokemonRoutes)
router.use('/types',typeRoutes)


module.exports = router;
