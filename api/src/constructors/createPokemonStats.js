const axios = require('axios');


const constructPokemon = async (idP) =>{
const getPokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${idP}`)
const {id, name, sprites, stats, weight, height,types} = getPokemon.data
const image = sprites?.other?.dream_world?.front_default
const newPokemon = {id,name,image,weight,height,types:""}

types.forEach( type => newPokemon.types = [...newPokemon.types,{name: type.type.name}])

await stats.forEach( stat =>{
    newPokemon[stat.stat?.name] = stat.base_stat
})

return newPokemon
}

module.exports = constructPokemon