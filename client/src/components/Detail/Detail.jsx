import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from './Detail.module.css'
import { useSelector } from "react-redux"
import unknown from "../../assets/img/unknown.png"



export default function Detail(){

    const {id} = useParams()
    const [detail,setDetail] = useState({})

    useEffect(()=>{
        id && axios(`http://localhost:3001/pokemons/${id}`)
        .then(({data}) => {
            return setDetail(data); 
        })
    },[id])

    return(
        <div>
            <div className={styles.cardStyle}>
                <div className={styles.header}>
                    <h3 className={styles.textStyle}>ID: {detail.id}</h3>
                    <h1 className={styles.titleStyle}>{detail.name}</h1>
                    <div className={styles.typesContainer}>
                        {detail.types?.map(type =>{
                        const image = require (`../../assets/img/img-types/${type.name}.png`) 
                        return <img className={styles.detailIcon} src={image} alt={type.name} title={type.name} />
                        })}
                    </div>
                </div>
                <div className={styles.containerImg}>
                    <img className={styles.detailImage} src={ detail.image || unknown} alt={detail.name} />
                </div>
                <h4 className={styles.textStyle}>Hp: {detail.hp}</h4>
                <h4 className={styles.textStyle}>Attack: {detail.attack}</h4>
                <h4 className={styles.textStyle}>Sp Attack: {detail["special-attack"] || detail.specialAttack || "Does not have" }</h4>
                <h4 className={styles.textStyle}>Defense: {detail.defense}</h4>
                <h4 className={styles.textStyle}>Sp Defense: {detail["special-defense"] || detail.specialDefense || "Does not have" }</h4>
                <h4 className={styles.textStyle}>Speed: {detail.speed || "Does not have" } </h4>
                <h4 className={styles.textStyle}>Height: {detail.height || "Does Not Have"}</h4>
                <h4 className={styles.textStyle}>Weight: {detail.weight || "Does Not Have"}</h4>
                <h4 className={styles.textStyle}>Types: {detail.types?.map((type)=>{
                    return `${type.name} `
                })}</h4>
            </div>
        </div>
    )
}