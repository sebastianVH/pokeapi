import axios from "axios"
import styles from "./Card.module.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Card({key,data}) {

    const [pokemon,setPokemon] = useState({})

    const url = data.url

    useEffect(()=>{
        async function getPokemon(url){        
        try {
            const {data} = await axios(url)
            setPokemon(data)
        } catch (error) {
            return error.message
        }}
        getPokemon(url) 
    },[data])

    return(
            <>
                { pokemon && 
                    (
                    <div className={styles.cardContainer}>
                        <Link style={styles.links} to={`detail/${pokemon.id}`}>
                            <h1 className={styles.textDetail}>{pokemon.name}</h1>
                        </Link>
                        <img className={styles.imgPokemon} src={pokemon.sprites?.other?.dream_world?.front_default} alt={pokemon.name} />
                        { pokemon.types?.map( type =>{
                            return <h3 className={styles.textDetail}> {type.type?.name}</h3>
                        })}
                    </div>
                        )   
                }
            </>
            )
}