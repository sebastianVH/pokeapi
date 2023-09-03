import React, {useState} from "react";
import styles from "./Searchbar.module.css"
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../redux/actions";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SearchBar() {

   const dispatch = useDispatch()
   const [name,setName] = useState("")
   const navigate = useNavigate()

   const handleChange = (event) => {
      setName(event.target.value)
   } 
   
   const clearInput = () => {
      document.querySelector('input').value = ''
   }

   const search = async () =>{
      try {
         const {data} = await axios(`http://localhost:3001/pokemons?name=${name}`)
         navigate(`home/detail/${data.id}`)
      } catch (error) {
         alert(error.response.data.error)
      }
   }

   return (
      <div className={styles.container}>
         <input className={styles.search} onChange={handleChange} type='search' placeholder="Ingrese el nombre..." />
         <button className={styles.btnAgregar} onClick={() => {search();clearInput()}}>Buscar</button>
      </div>
   );
}