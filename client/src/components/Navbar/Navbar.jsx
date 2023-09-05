import { useEffect, useState } from "react"
import myStyle from "../Navbar/Navbar.module.css"
import SearchBar from "../SearchBar/Searchbar"
import { getTypes,orderByName  } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"


export default function Navbar(){

    const types = useSelector( state => state.allTypes)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTypes())
    },[])

    const handleOrder = (e) => {
        dispatch(orderByName(e.target.value))
    }

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
                        <label className={myStyle.label} htmlFor="">Order By Name</label>
                        <select className={myStyle.selector} onChange={handleOrder}>
                            {/* 
                            Hacer una peticion para que ordene por Orden */}
                            
                            <option value="">No Order</option>
                            <option value="A">Asc</option>
                            <option value="B">Desc</option>
                        </select>
                    </div>
                    <div>
                    <label className={myStyle.label} htmlFor="">Filter By Type</label>
                        <select className={myStyle.selector}>
                            <option value="All">All</option>
                            {types && types.map(type => {
                                return <option key={type.id} value={type.name}> {type.name} </option>
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