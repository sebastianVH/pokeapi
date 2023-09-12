
import styles from "./Card.module.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import imagen from "../../assets/img/unknown.png"

export default function Card({data}) {

    const [pokemon,setPokemon] = useState(data)

    useEffect(()=>{
        setPokemon(data)
    },[data])

    return(
            <>
                { pokemon && 
                    (
                    <div className={styles.cardContainer}>
                        <Link style={styles.links} to={`/detail/${pokemon.id}`}>
                            <h1 key={pokemon.id} className={styles.textDetail}>{pokemon.name}</h1>
                            <img className={styles.imgPokemon} src={pokemon.image || imagen} alt={pokemon.name} />
                        <div className={styles.typesContainer}>
                            { pokemon.types?.map( type =>{
                                const image = require (`../../assets/img/img-types/${type.name}.png`) 
                                return ( <div key={type.id} className={styles.types}> 
                                            <h3 className={styles.textTypes}> {type.type?.name || type.name}</h3>
                                            <img className={styles.detailIcon} src={image} alt={type.name} title={type.name} />
                                        </div> )
                            })}
                        </div>
                        </Link>
                    </div>
                        )   
                }
            </>
            )
}