import axios from "axios";
import { SET_POKEMONS } from "./actionsTypes";
const URL_POKEMON = "http://localhost:3001/pokemons"

export const setPokemons = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`${URL_POKEMON}`)
            return dispatch({
                type: SET_POKEMONS,
                payload: data.results
            })
        } catch (error) {
            return error.message
        }
    }
}
