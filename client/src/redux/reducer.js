import { SET_POKEMONS,GET_TYPES,FILTER_BY_ORIGIN,FILTER_BY_TYPE,ORDER_BY_ATTACK,ORDER_BY_NAME } from "./actionsTypes"



const initialState = {
    allPokemons: [],
    allTypes:[],
    apiPokemons:[],
    dataBasePokemons:[],
    filters:[]
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case SET_POKEMONS:
            return {...state, apiPokemons: [...action.payload.api], dataBasePokemons: [...action.payload.database], allPokemons: [...action.payload.api, ...action.payload.database],filters:[...action.payload.api ,...action.payload.database]}
        case GET_TYPES:
            return {...state, allTypes: action.payload}
        case ORDER_BY_NAME:
            //state.allPokemons.sort((a,b) => (action.payload === "A") ? ((a.name > b.name) ? 1 : -1 ) : ((b.name > a.name) ? 1 : -1))
            return {...state, filters: state.allPokemons, allPokemons: (!action.payload) ? [...state.apiPokemons, ...state.dataBasePokemons] : ((action.payload === "A") ? state.filters.sort((a,b) => (a.name > b.name) ? 1 : -1) : state.filters.sort((a,b) => (b.name > a.name) ? 1 : -1))}
        default:
            return {...state}
    }
}

export default reducer