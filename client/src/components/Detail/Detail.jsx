import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styles from './Detail.module.css'
import unknown from "../../assets/img/unknown.png"
import Alert from "../Alert/Alert"


export default function Detail(){

    const {id} = useParams()
    const [detail,setDetail] = useState({})
    const [errorAlert, setErrorAlert] = useState(false)

    useEffect(()=>{
        id && axios(`http://localhost:3001/pokemons/${id}`)
        .then(({data}) => {
            return setDetail(data); 
        }).catch(error =>
            setErrorAlert({message: error.response.data.error}))
    },[id])

    const closeAlert = () => {
        setErrorAlert(false)
     }

    return(
        <div className={styles.itemsContainer}>
            <div className={styles.cardStyle} transition-style="in:square:center">
                <div>
                    <div className={styles.header}>
                        <h3 className={styles.textStyle}>ID: {detail.id}</h3>
                        <div className={styles.headerElements}>
                            <h1 className={styles.titleStyle}>{detail.name}</h1>
                        </div>
                    </div>
                    <div className={styles.containerImg}>
                        <img className={styles.detailImage} src={ detail.image || unknown} alt={detail.name} />
                    </div>
                </div>
                <div className={styles.pokemonDetails}>
                    <h4 className={styles.textStyle}>Hp: {detail.hp}</h4>
                    <h4 className={styles.textStyle}>Attack: {detail.attack}</h4>
                    <h4 className={styles.textStyle}>Sp Attack: {detail["special-attack"] || detail.specialAttack || "Does not have" }</h4>
                    <h4 className={styles.textStyle}>Defense: {detail.defense}</h4>
                    <h4 className={styles.textStyle}>Sp Defense: {detail["special-defense"] || detail.specialDefense || "Does not have" }</h4>
                    <h4 className={styles.textStyle}>Speed: {detail.speed || "Does not have" } </h4>
                    <h4 className={styles.textStyle}>Height: {detail.height || "Does Not Have"}</h4>
                    <h4 className={styles.textStyle}>Weight: {detail.weight || "Does Not Have"}</h4>
                    <h4 className={styles.textStyle}>Types: {detail.types?.map((type,index) =>{
                                const image = require (`../../assets/img/img-types/${type.name}.png`) 
                                return <img key={index} className={styles.detailIcon} src={image} alt={type.name} title={type.name} />
                                })}</h4>
                </div>
            </div>
                <Link to={"/home"}>
                    <button className={styles.button}>Return to Home</button>
                </Link>
                {errorAlert && <Alert title={errorAlert.title} message={errorAlert.message} onClose={closeAlert}/>}
        </div>
    )
}