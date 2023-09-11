import { useEffect } from "react"
import myStyle from "../Navbar/Navbar.module.css"
import { orderByName,orderByAttack,filterByType,filterByOrigin } from "../../redux/actions"
import { useDispatch } from "react-redux"


export default function Navbar({types}){

    const dispatch = useDispatch()

    useEffect(()=>{
    },[])

    const handleOrderByName = (e) => {
        dispatch(orderByName(e.target.value))
    }

    const handleOrderByAttack = (e) => {
        dispatch(orderByAttack(e.target.value))
    }

    const handleFilterByType = (e) => {
        dispatch(filterByType(e.target.value))
    }

    const handleFilterByOrigin = (e) => {
        dispatch(filterByOrigin(e.target.value))
    }

    return  <div className={myStyle.divSelectores}>
                    <div className={myStyle.options}>
                        <label className={myStyle.label} htmlFor="">Order By Attack</label>
                        <div>
                            <select className={myStyle.selector} onClick={handleOrderByAttack}>
                                <option value="A">Asc</option>
                                <option value="B">Desc</option>
                            </select>
                        </div>
                    </div>
                    <div className={myStyle.options}>
                        <label className={myStyle.label} htmlFor="">Order By Name</label>
                        <div>
                            <select className={myStyle.selector} onClick={handleOrderByName}>
                                <option value="A">Asc</option>
                                <option value="B">Desc</option>
                            </select>
                        </div>
                    </div>
                    <div className={myStyle.options}>
                    <label className={myStyle.label} htmlFor="">Filter By Type</label>
                        <div>
                            <select className={myStyle.selector} onChange={handleFilterByType}>
                                <option value="">All</option>
                                {types && types.map(type => {
                                    return <option key={type.id} value={type.name}> {type.name} </option>
                                    })} 
                            </select>
                        </div>
                    </div>
                    <div className={myStyle.options}>
                        <label className={myStyle.label} htmlFor="">Filter By Origin</label>
                        <div>
                            <select className={myStyle.selector} onChange={handleFilterByOrigin}>
                                <option value="">All</option>
                                <option value="API">API</option>
                                <option value="DataBase">DataBase</option>
                            </select>
                        </div>
                    </div>
                </div>
            
}