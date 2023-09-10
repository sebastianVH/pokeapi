import { SET_POKEMONS,GET_TYPES,FILTER_BY_ORIGIN,FILTER_BY_TYPE,ORDER_BY_ATTACK,ORDER_BY_NAME,ADD_POKEMON } from "./actionsTypes"

const initialState = {
    allPokemons: [],
    allTypes:[],
    apiPokemons:[],
    dataBasePokemons:[],
    filtered: [],
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case SET_POKEMONS:
            return {...state, apiPokemons: [...action.payload.api], dataBasePokemons: [...action.payload.database], allPokemons: [...action.payload.api, ...action.payload.database] ,filtered: [...action.payload.api, ...action.payload.database]}
        case ADD_POKEMON:
            return {...state, apiPokemons: [...state.apiPokemons,action.payload], allPokemons: [...state.allPokemons,action.payload]}
        case GET_TYPES:
            return {...state, allTypes: action.payload}
        case ORDER_BY_NAME:
            return {...state, allPokemons: (!action.payload) ? [...state.apiPokemons,...state.dataBasePokemons] : ((action.payload === "A") ? state.allPokemons.sort((a,b) => (a.name > b.name) ? 1 : -1) : state.allPokemons.sort((a,b) => (b.name > a.name) ? 1 : -1))}
        case ORDER_BY_ATTACK:
            return {...state, allPokemons: (!action.payload) ? [...state.apiPokemons,...state.dataBasePokemons] : state.allPokemons.sort((a,b) => (action.payload === "A") ? (a.attack - b.attack) :(b.attack - a.attack) )}
        case FILTER_BY_TYPE:
            return {...state, allPokemons: (!action.payload) ? [...state.apiPokemons,...state.dataBasePokemons]: state.filtered.filter(pokemon => pokemon.types.some ( type => type.name === action.payload))}
        case FILTER_BY_ORIGIN:
            return {...state, allPokemons: (!action.payload) ? [...state.apiPokemons,...state.dataBasePokemons]: ((action.payload === "API") ? [...state.apiPokemons]:[...state.dataBasePokemons]) }
        default:
            return {...state}
    }
}


export default reducer