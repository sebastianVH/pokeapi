const getAllPokemons = require("./getAllPokemons")
const getByName = require("./getByName")


const getPokemonHandler = async (req,res) => {
    const {name} = req.query
    const {status,data} = (name) ? await getByName(name) : await getAllPokemons()
    return res.status(status).json(data)
}

module.exports = getPokemonHandler