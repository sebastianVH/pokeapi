import React, {useState} from "react";
import styles from "./Searchbar.module.css"
import { Link, redirect, useNavigate} from "react-router-dom";
import axios from "axios";
import pikachu from "../../assets/img/pikachu-face.png"
import pokeball from "../../assets/img/pokeball.png"
import { searchValidations } from "./validations";



export default function SearchBar() {

   const [name,setName] = useState("")
   const [errors,setErrors] = useState()
   const navigate = useNavigate()

   const handleChange = (e) => {
      console.log(e.target.value);
      setErrors(searchValidations(e.target.value))
      setName(e.target.value)
   } 
   
   const clearInput = () => {
      document.querySelector('input').value = ''
   }

   const search = async () =>{
      if (errors) return alert("Please, check the errors.")
      try {
         const {data} = await axios(`http://localhost:3001/pokemons?name=${name}`)
         navigate(`home/detail/${data.id}`)
      } catch (error) {
         alert(error.response.data.error)
      }
   }

   const handleForm = () => {
      redirect('/form')
   }

   return (
      <div className={styles.container}>
            <Link to={"/home"}>
               <div className={styles.titleBar}>
                     <img className={styles.pikachu} src={pikachu} alt="" />
                     <h1 className={styles.title}>PokeApi</h1>
               </div>
            </Link>
         <div>
            <Link to={'/form'}>
                  <button onClick={handleForm} className={styles.buttonForm}>Create your own Pokémon</button>
            </Link>
         </div>
         <div className={styles.containerField}>
            <h3 className={styles.tagCapture}>Capture a Pokemon!!</h3>
            <div className={styles.inputContainer}>
               <input className={styles.search} onChange={handleChange} type='search' placeholder="search by name..." />
               <button className={styles.btnAgregar} onClick={() => {search();clearInput()}}>
                  <img src={pokeball} className={styles.pokeball} alt="" />
               </button>
            </div>
               {errors && <span className={styles.errorText}>{errors}</span>}
         </div>
      </div>
   );
}