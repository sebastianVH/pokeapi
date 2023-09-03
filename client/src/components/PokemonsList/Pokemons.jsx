import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import {useDispatch, useSelector} from "react-redux"
import { setPokemons } from "../../redux/actions"
import Card from "../Card/Card"
import axios from "axios"
import styles from "./Pokemons.module.css"
import { SET_POKEMONS } from "../../redux/actionsTypes"

export default function Pokemons(){

    //const pokemons  = useSelector((state)=>state.allPokemons)
    const pokemons = useSelector(state => state.allPokemons)
    const [page,setPage] = useState(0)
    const [pageSize,setPageSize] = useState(12)
    const [displayPokemons, setDisplayPokemons] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        const pokemonsToDisplay = pokemons.slice(page,pageSize)
        setDisplayPokemons(pokemonsToDisplay)
        
    },[page,pageSize])

    const handlePage = (handler) => {
        console.log(handler);
       switch(handler){
        case "next":
            if (page < Math.ceil(pokemons.length / pageSize)) {
                setPage(page + 12);
                setPageSize(pageSize + 11)
                console.log(page);
                console.log(pageSize);
            }
            break
        case "prev":
            if (page > 1) {
                setPage(page - 12);
                setPageSize(pageSize - 11)
            }
            break
        }
    }

    return <div>
                <div>
                    <div className={styles.cardContainer}>
                        {displayPokemons.map( (pokemon) =>{
                            return <Card key={pokemon.id} data={pokemon}/>
                        })}
                    </div>
                    {page >= 1 && <button className={styles.buttons} onClick={()=>handlePage("prev")} > Previous Page</button>}
                    {(page >= 0 && displayPokemons.length === 12) && <button className={styles.buttons} onClick={()=> handlePage("next")} >Next Page</button> }
                </div>
            </div>
}