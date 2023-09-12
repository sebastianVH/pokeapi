import {useEffect, useState } from "react"
import { Validations } from "./validations"
import styles from "./Form.module.css"
import { useDispatch, useSelector } from "react-redux"
import { createPokemon, getTypes,setPokemons } from "../../redux/actions"
import { useNavigate } from "react-router-dom"


export default function Form(){

    const types = useSelector(state => state.allTypes)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [pokemondata,setPokemondata] = useState({
        name:"",
        image:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        types:[]
    })

    const [errors,setErrors] = useState({
        name:"",
        image:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        types:[]
    })

    useEffect(()=>{
        dispatch(getTypes())
    },[])


    const handleChange = (e) =>{
        const property = e.target.name
        const value = e.target.value
        setErrors(Validations({...pokemondata, [property]:value}))
        setPokemondata({...pokemondata, [property]: value})
    } 

    const handleSubmit = (e) =>{
        e.preventDefault();
         if (Object.keys(errors).length === 0) {
            try {
                dispatch(createPokemon(pokemondata));
            } catch (error) {
                return alert(error.message)
            }
            alert("Pokemon created succesfully!!")
            dispatch(setPokemons())
            navigate('/home')
        } 
        else {
            alert("There's some errors found on the form!")
        }
    }

    const handleChangeType = (e) => {
        const value = e.target.value
        const property = e.target.name
        if (property === "type1"){
            (value) ? pokemondata.types[0] = e.target.value : pokemondata.types.shift()
        } else {
            (value) ? pokemondata.types[1] = e.target.value : pokemondata.types.pop()
        }
        setErrors(Validations({...pokemondata, [property]:value}))
        setPokemondata({...pokemondata, types:[...pokemondata.types]});
    }

    const handleCancel = () => {
        navigate('/home')
    }

        return  <div className={styles.containerForm}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <h4 className={styles.loginBanner}>Create  your own Pokemon</h4>
                        <div className={styles.row}>
                            <div className={styles.formElements}>
                                <label className={styles.inputLabel} htmlFor="name">Name*</label>
                                <input type="text" name="name" className={errors.name ? styles.error : styles.success} value={pokemondata.name} onChange={handleChange}/>
                                <span className={styles.errorText}>{errors.name}</span>
                            </div>
                            <div className={styles.formElements}>
                                <label className={styles.inputLabel} htmlFor="image">Image*</label>
                                <input type="text" name="image" className={errors.image ? styles.error : styles.success} value={pokemondata.image} onChange={handleChange} />
                                <span className={styles.errorText}>{errors.image}</span>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.formElements}>                            
                                <label className={styles.inputLabel} htmlFor="hp">HP*</label>
                                <input type="number" name="hp" className={errors.hp ? styles.error : styles.success} value={pokemondata.hp} onChange={handleChange} />
                                <span className={styles.errorText}>{errors.hp}</span>
                            </div>
                            <div className={styles.formElements}>
                                <label className={styles.inputLabel} htmlFor="attack">Attack*</label>
                                <input type="number" name="attack" className={errors.attack ? styles.error : styles.success} value={pokemondata.attack} onChange={handleChange} />
                                <span className={styles.errorText}>{errors.attack}</span></div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.formElements}>
                                <label className={styles.inputLabel} htmlFor="defense">Defense*</label>
                                <input type="number" name="defense" className={errors.defense ? styles.error : styles.success} value={pokemondata.defense} onChange={handleChange} />
                                <span className={styles.errorText}>{errors.defense}</span>
                            </div>
                            <div className={styles.formElements}>
                                <label className={styles.inputLabel} htmlFor="speed">Speed</label>
                                <input type="number" name="speed" className={styles.success} value={pokemondata.speed} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.formElements}>
                                <label className={styles.inputLabel} htmlFor="height">Height</label>
                                <input type="number" name="height" className={styles.success} value={pokemondata.height} onChange={handleChange} />
                            </div>
                            <div className={styles.formElements}>
                                <label className={styles.inputLabel} htmlFor="weight">Weight</label>
                                <input type="number" name="weight" className={styles.success} value={pokemondata.weight} onChange={handleChange} />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.formElements}>
                                <label className={styles.inputLabel} htmlFor="type">Type 1*</label>
                                <select name="type1" className={errors.types ? styles.error : styles.success} onChange={handleChangeType}>
                                    <option value="">**Select 1st type**</option>
                                    {types && types.map(type => {
                                        return <option  key={type.id} value={type.name}> {type.name} </option>
                                        })} 
                                </select>
                                <span className={styles.errorText}>{errors.types}</span>
                            </div>
                            <div className={styles.formElements}>
                                <label className={styles.inputLabel} htmlFor="Type">Type 2</label>
                                <select name="type2" className={errors.types ? styles.error : styles.success} onChange={handleChangeType} disabled={(pokemondata.types.length < 1)}>
                                    <option value="">**Select 2nd type**</option>
                                    {types && types.map(type => {
                                        return <option key={type.id} value={type.name}> {type.name} </option>
                                        })} 
                                </select>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <button className={styles.btnSubmit} type="submit">Create!</button>           
                            <button onClick={handleCancel} className={styles.btnCancel} type="button">Cancel</button>
                        </div>
                    </form>
                </div>
}