const axios = require('axios');
const { Pokemon } = require('../db')

const getById = async (req,res) => {
    const idP = req.params.idPokemon;
    try {
        const getPokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${idP}`)
        const {id, name, sprites, stats, weight, height} = getPokemon.data
        const image = sprites?.other?.dream_world?.front_default
        const newPokemon = {id,name,image,weight,height}
        await stats.forEach( stat =>{
            newPokemon[stat.stat?.name] = stat.base_stat
        })

        const obtainedPokemon = await Pokemon.findOrCreate({
            where:{
                id:newPokemon.id,
            },
            defaults:
            {            
            name:newPokemon.name,
            image:newPokemon.image,
            hp:newPokemon.hp,
            attack:newPokemon.attack,
            defense:newPokemon.defense,
            specialAttack:newPokemon['special-attack'],
            specialDefense:newPokemon['special-defense'],
            speed:newPokemon.speed,
            height:newPokemon.height,
            weight:newPokemon.weight
        }
        })
        return res.status(200).json(obtainedPokemon)   
    } catch (error) {
        return res.status(400).json({error:"Pokemon no encontrado"})
    }
}


module.exports = getById