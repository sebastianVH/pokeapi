import axios from "axios"
import styles from "./Card.module.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import image from "../../assets/img/unknown.png"

export default function Card({key,data}) {

    const [pokemon,setPokemon] = useState({})

    const url = data.url || null

    useEffect(()=>{
        async function getPokemon(url){        
        try {
            const {data} = await axios(url)
            setPokemon(data) 
        } catch (error) {
            return error.message
        }}
        (!url) ? setPokemon(data) : getPokemon(url) 
    },[data])

    return(
            <>
                { pokemon && 
                    (
                    <div className={styles.cardContainer}>
                        <Link style={styles.links} to={`detail/${pokemon.id}`}>
                            <h1 key={key} className={styles.textDetail}>{pokemon.name}</h1>
                        </Link>
                        {(pokemon.sprites?.other?.dream_world?.front_default || pokemon.image )&& <img className={styles.imgPokemon} src={pokemon.sprites?.other?.dream_world?.front_default || image} alt={pokemon.name} />}
                        { pokemon.types?.map( type =>{
                            return <h3 key={type.id} className={styles.textDetail}> {type.type?.name || type.name}</h3>
                        })}
                    </div>
                        )   
                }
            </>
            )
}