const  axios = require("axios");
const { Pokemon,Type } = require("../db");
const constructPokemon = require("../constructors/createPokemonStats");

const getAllPokemons = async () =>{
    try{
        const getApiPokemons = await axios("https://pokeapi.co/api/v2/pokemon") //! COMPLETAR
        const arrayPokemons = getApiPokemons.data.results

        const pokemonPromises = arrayPokemons.map(async (pokemon) => {
            const getDetallePokemon = await axios.get(pokemon.url);
            return constructPokemon(getDetallePokemon.data.id);
        });

        const newPokemons = await Promise.all(pokemonPromises);

        const getDbPokemons = await Pokemon.findAll({ include: Type })
        return {status:200, data: {api: newPokemons, database: getDbPokemons}}
    } catch(error){
        return {status: 500,data:{error: "Error catch'em all"}}
    }
}

module.exports = getAllPokemons