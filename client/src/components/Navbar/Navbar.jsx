import { useEffect, useState } from "react"
import myStyle from "../Navbar/Navbar.module.css"
import SearchBar from "../SearchBar/Searchbar"
import axios from 'axios'

export default function Navbar({search}){

    const[types,setTypes] = useState([])

    const getTypes = async () => {
        const allTypes = await axios("http://localhost:3001/types")
        setTypes(allTypes.data);
    }

    useEffect(()=>{
         getTypes()
    },[])

    return <div>
                <div className={myStyle.divSelectores}>
                    <div>
                        <label className={myStyle.label} htmlFor="">Order By Attack</label>
                        <select className={myStyle.selector}>
                            {/* 
                            Hacer una peticion para que ordene por ataque */}
                            <option value="A">Asc</option>
                            <option value="B">Desc</option>
                        </select>
                    </div>
                    <div>
                        <label className={myStyle.label} htmlFor="">Order By Alphabetic</label>
                        <select className={myStyle.selector}>
                            {/* 
                            Hacer una peticion para que ordene por Orden */}
                            <option value="A">Asc</option>
                            <option value="B">Desc</option>
                        </select>
                    </div>
                    <div>
                    <label className={myStyle.label} htmlFor="">Filter By Type</label>
                        <select className={myStyle.selector}>
                            {     
                            /* 
                            Mandar filtro para que ordene por tipo> 
                            
                            <option value="">All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Genderless">Genderless</option>
                            <option value="unknown">Unknown</option> */}
                            <option value="All">All</option>
                            {types.map(type => {
                                return <option key={type.id} value={type.name}>{type.name}</option>
                                })}
                        </select>
                    </div>
                    <div>
                    <label className={myStyle.label} htmlFor="">Filter By Origin</label>
                        <select className={myStyle.selector}>
                            <option value="">All</option>
                            <option value="API">API</option>
                            <option value="DataBase">DataBase</option>
                        </select>
                    </div>
                    <div>
                        <SearchBar/>
                    </div>
                </div>
            </div>
}