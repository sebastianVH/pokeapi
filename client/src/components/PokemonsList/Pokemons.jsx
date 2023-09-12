import { useEffect, useState } from "react"
import Card from "../Card/Card"
import styles from "./Pokemons.module.css"
import Navbar from "../Navbar/Navbar"


export default function Pokemons({pokemons,types}){

    const [page,setPage] = useState(0)
    const [pageNumber,setPageNumber] = useState(0)
    const [pageSize,setPageSize] = useState(12)
    const [displayPokemons, setDisplayPokemons] = useState([])

    useEffect(()=>{
        const pokemonsToDisplay = pokemons.slice(page,pageSize)
        setDisplayPokemons(pokemonsToDisplay)
    },[page,pageSize,pokemons])


    const handlePage = (handler) => {
        switch(handler){
        case "next":
            if (pageNumber <= Math.ceil(pokemons.length / pageSize)) {
                setPage(page + 12);
                setPageSize(pageSize + 12);
                setPageNumber(pageNumber +1)
            }
            break
        case "prev":
            if (pageNumber >= 1) {
                setPage(page - 12);
                setPageSize(pageSize - 12)
                setPageNumber(pageNumber -1)
            }
            break
        default:
            break;
        }
    }

    return <div className={styles.elementContainer}>
                <div className={styles.navContainer}>
                    <Navbar types={types} />
                </div>
                <div>
                    <div className={styles.cardContainer}>
                        {displayPokemons.map( pokemon =>{
                            return <Card key={pokemon?.id} data={pokemon}/>
                        })}
                    </div>
                    {page >= 1 && <button className={styles.buttons} onClick={()=>handlePage("prev")} > Previous Page</button>}
                    {(page >= 0 && displayPokemons.length === 12) && <button className={styles.buttons} onClick={()=> handlePage("next")} >Next Page</button> }
                </div>
            </div>
}