const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { DataTypes } = require('sequelize');
const constructPokemon = require('../constructors/createPokemonStats');
constructPokemon

const getById = async (req,res) => {
    const idP = req.params.idPokemon;
    try {
        const databasePokemon = await Pokemon.findOne({
            where: {
                id: idP
            },
            include: Type
        }).catch(error =>"")

        if (databasePokemon) return res.status(200).json(databasePokemon) 

        const newPokemon = await constructPokemon(idP)

        return res.status(200).json(newPokemon)   
    } catch (error) {
        console.log(error);
        return res.status(404).json({error:"Error fetching Pokemon"})
    }
}


module.exports = getById