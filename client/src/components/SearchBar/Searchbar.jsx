import React, {useState} from "react";
import styles from "./Searchbar.module.css"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import pokeball from "../../assets/img/pokeball.png"


export default function SearchBar() {

   const [name,setName] = useState("")
   const navigate = useNavigate()
   const regex = /\d/

   const handleChange = (event) => {
      setName(event.target.value)
   } 
   
   const clearInput = () => {
      document.querySelector('input').value = ''
   }

   const search = async () =>{
      if (regex.test(name)) return alert("Search can only contain characters")
      try {
         const {data} = await axios(`http://localhost:3001/pokemons?name=${name}`)
         navigate(`home/detail/${data.id}`)
      } catch (error) {
         alert(error.response.data.error)
      }
   }

   return (
      <div className={styles.container}>
            <Link to={"/home"}>
               <div className={styles.titleBar}>
                     <img className={styles.pokeball} src={pokeball} alt="" />
                     <h1 className={styles.title}>PokeApi</h1>
               </div>
            </Link>
         <div>
            <Link to={'/form'}>
                  <button>Create your own Pokémon</button>
            </Link>
         </div>
         <div className={styles.containerField}>
            <div>
               <label className={styles.label} htmlFor="">Search a pokemon</label>
               <input className={styles.search} onChange={handleChange} type='search' placeholder="Ingrese el nombre..." />
            </div>
            <button className={styles.btnAgregar} onClick={() => {search();clearInput()}}>Buscar</button>
         </div>
      </div>
   );
}