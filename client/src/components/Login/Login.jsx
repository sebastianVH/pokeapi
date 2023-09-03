import styles from "./Login.module.css"
import pokeball from "../../assets/img/pngwing.com.png"
import { Link } from "react-router-dom"

export default function Login () {
    return <div className={styles.container}>
                <Link className={styles.Login} to='/home'>
                    <img className={styles.pokeball} src={pokeball} alt="" />
                    <div className={styles.textEntrar}>
                        <span>Entrar</span>
                    </div>
                </Link>
            </div>
}