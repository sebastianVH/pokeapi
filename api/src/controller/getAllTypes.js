const axios  = require("axios");
const { Type } = require("../db");

const getTypes = async(req,res) => {
    const {data} = await axios("https://pokeapi.co/api/v2/type")
    try {
        const allTypes = await Type.bulkCreate(data.results)
        res.status(203).json(allTypes)
    } catch (error) {
        res.status(500).json({error: "Types can't be reached"})
    }

}

module.exports = getTypes