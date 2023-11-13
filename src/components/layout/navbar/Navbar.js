import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

function Navbar(params) {

    return(
            <ul className ={styles.list}>
                <li className ={styles.item}>
                    <Link to = "/">Inicio </Link>
                </li>

                <li className ={styles.item}>
                    <Link to ="/ciencias">Ciencias</Link>
                </li>

                <li className ={styles.item}>
                    <Link to ="/economia">Economia</Link>
                </li>

                <li className ={styles.item}>
                    <Link to ="/esportes">Esportes</Link>
                </li>

                <li className ={styles.item}>
                    <Link to ="/tecnologia">Tecnologia</Link>
                </li>

                <li className ={styles.item}>
                    <Link to ="/equipe">Equipe</Link>
                </li>
            </ul>
    )
    
}

export default Navbar