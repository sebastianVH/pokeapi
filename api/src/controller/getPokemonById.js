const axios = require('axios');

const { Pokemon, Type } = require('../db');
const { DataTypes } = require('sequelize');

const getById = async (req,res) => {
    const idP = req.params.idPokemon;
    try {
        const databasePokemon = await Pokemon.findOne({
            where: {
                id: idP
            },
            include: Type
        }).catch(error => "")

        if (databasePokemon) return res.status(200).json(databasePokemon) 

        const getPokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${idP}`)
        const {id, name, sprites, stats, weight, height,types} = getPokemon.data
        const image = sprites?.other?.dream_world?.front_default
        const newPokemon = {id,name,image,weight,height,types:""}

        types.forEach( type => newPokemon.types = [...newPokemon.types,{name: type.type.name}])

        await stats.forEach( stat =>{
            newPokemon[stat.stat?.name] = stat.base_stat
        })
        return res.status(200).json(newPokemon)   
    } catch (error) {
        return res.status(400).json({error:"Error fetching Pokemon"})
    }
}


module.exports = getById