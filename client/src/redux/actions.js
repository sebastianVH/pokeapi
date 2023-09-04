import axios from "axios";
import { SET_POKEMONS,GET_TYPES,ORDER_BY_NAME } from "./actionsTypes";

const URL_POKEMON = "http://localhost:3001/pokemons"
const URL_TYPES = "http://localhost:3001/types"


export const setPokemons = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`${URL_POKEMON}`)
            return dispatch({
                type: SET_POKEMONS,
                payload: data
            })
        } catch (error) {
            return error.message
        }
    }
}

export const getTypes = () => {
    return async (dispatch) =>{
        try {
            const {data} = await axios(URL_TYPES)
            return dispatch({
                type: GET_TYPES,
                payload: data
            })
        } catch (error) {
            return error.message
        }
    }
}

export const orderByName = (order) => {
    return (dispatch) =>{
        return dispatch({
            type: ORDER_BY_NAME,
            payload: order
        })
    }
}