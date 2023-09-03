import { SET_POKEMONS, SEARCH_POKEMON } from "./actionsTypes"



const initialState = {
    allPokemons: [],
    dataBasePokemons:[],
}

const reducer = (state= initialState,action) =>{
    switch(action.type){
        case SET_POKEMONS:
            return {...initialState, allPokemons: action.payload}
        default:
            return {...initialState}
    }
}

export default reducer