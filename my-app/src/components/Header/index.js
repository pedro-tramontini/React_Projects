import { Link } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
            <span>MaiaFlix</span>
            </Link>
            <nav>
            <Link to="/"> <a href="#">Home</a></Link>
            <Link to="/watch"><a href="#">Assistir</a></Link>
            </nav>
        </header>
    )
}

export default Header