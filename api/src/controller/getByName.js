const axios = require("axios");
const { Pokemon,Type } = require("../db");

const getByName = async(pokemonName) => {
    try{
        const obtainedPokemon = await Pokemon.findOne({
            where:{
                name:pokemonName,
            },
            include: Type
        }).catch( error => "")

        if(obtainedPokemon) return {status: 200, data: obtainedPokemon}

        const getPokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        const {id, name, sprites, stats, weight, height,types} = getPokemon.data
        const image = sprites?.other?.dream_world?.front_default
        const newPokemon = {id,name,image,weight,height,types:""}

        types.forEach( type => newPokemon.types = [...newPokemon.types,{name: type.type.name}])

        await stats.forEach( stat =>{
            newPokemon[stat.stat?.name] = stat.base_stat
        })
        return {status: 200,data: newPokemon }
    
    } catch (error) {
        return {status: 400, data: {error:"Pokemon doesn't exist"}}
    }

}

module.exports = getByName