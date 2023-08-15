const  axios = require("axios");
const { Pokemon } = require("../db");

const getAllPokemons = async (req,res) =>{
    try{
         const allPokemons = await Pokemon.findAll()
         return res.status(200).json(allPokemons)
    } catch(error){
        return res.status(500).json({error: "Error al capturar los pokemones"})
    }
}

module.exports = getAllPokemons
