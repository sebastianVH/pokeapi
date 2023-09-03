const  axios = require("axios");
const { Pokemon } = require("../db");

const getAllPokemons = async (req,res) =>{
    try{
        const getPokemons = await axios("https://pokeapi.co/api/v2/pokemon") //! COMPLETAR
        return {status:200, data: getPokemons.data}
    } catch(error){
        return {status: 500,data:{error: "Error catch'em all"}}
    }
}

module.exports = getAllPokemons