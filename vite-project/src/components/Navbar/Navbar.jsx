import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar (){
    /**
     * menggunakan style yang sudah di import   
     * memanggilnya menggunakan expresion
     */
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Movie A    pp</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link to="/">Home</Link>
                        </li>   
                        <li className={styles.navbar__item}>
                            <Link to="/movie/create">Add Movie</Link>
                        </li>   
                        <li className={styles.navbar__item}>
                            <Link to="/movie/popular">Popular</Link>    
                        </li>   
                        <li className={styles.navbar__item}>
                            <Link to="/movie/now">Now Playing</Link>
                        </li>   
                        <li className={styles.navbar__item}>
                            <Link to="/movie/top">Top Rated</Link>    
                        </li>   
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar