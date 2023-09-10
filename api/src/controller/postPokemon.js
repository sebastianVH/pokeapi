const { DataTypes } = require("sequelize")
const { Pokemon,Type } = require("../db")

const postPokemon = async (req,res) => {
    const {name,image,hp,attack,defense,speed,height,weight,types} = req.body
    if(!name || !image || !hp || !attack || !defense || !types) return res.status(400).json({error: "Missing Data to Create a Pokemon"})
    try {
        const createdPokemon = await Pokemon.create({
            name:name.toLowerCase(),
            image:image,
            hp:hp,
            attack:attack,
            defense:defense,
            speed:speed || 0,
            height: height || 0,
            weight: weight || 0
        })

        await types.forEach (async type =>{
            const [obtainedType,status] = await Type.findOrCreate({
                where: {
                    name: type
                },
                defaults:{
                    name: type
                }
            })
            createdPokemon.addType(obtainedType)
        })
        return res.status(203).json(createdPokemon)
    } catch (error) {
        return res.status(500).json({error: "Pokemon can't be created"})
    }
}


module.exports = postPokemon