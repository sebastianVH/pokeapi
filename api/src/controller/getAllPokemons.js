const  axios = require("axios");
const { Pokemon,Type } = require("../db");

const getAllPokemons = async (req,res) =>{
    try{
        const getPokemons = await axios("https://pokeapi.co/api/v2/pokemon") //! COMPLETAR
        const getApiPokemons = await Pokemon.findAll({ include: Type })
        return {status:200, data: {api: getPokemons.data.results, database: getApiPokemons}}
    } catch(error){
        return {status: 500,data:{error: "Error catch'em all"}}
    }
}

module.exports = getAllPokemons