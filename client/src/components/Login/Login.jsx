import styles from "./Login.module.css"
import { Link } from "react-router-dom"



export default function Login () {

    return <div>
                <div className={styles.containerPrincipal}>
                    <h1 className={styles.title}>PokeAPI for Henry</h1>
                </div>
                <div className={styles.container}>
                    <Link className={styles.Login} to='/home'>
                            <p className={styles.textEntrar}>Enter</p>
                    </Link>
                </div>
            </div>
}