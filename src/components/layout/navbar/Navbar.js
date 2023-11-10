import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

function Navbar(params) {

    return(
            <ul class ={styles.list}>
                <li class ={styles.item}>
                    <Link to = "/">Inicio </Link>
                </li>

                <li class ={styles.item}>
                    <Link to ="/equipe">Equipe</Link>
                </li>
            </ul>
    )
    
}

export default Navbar