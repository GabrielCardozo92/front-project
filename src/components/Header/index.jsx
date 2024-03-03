import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useState } from 'react'


function Header() {

    const [ ShowMenu, setShowMenu ] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!ShowMenu)
    }

    return (
        <header className={styles.header}>
            <Link to="/">
                <span>GabrielCardozo.dev</span>
            </Link>
            <nav 
                className={`${styles.menuSandwich} ${ ShowMenu ? styles.show : ''}`}
                onClick={toggleMenu}
                >
                <Link to="/">Home</Link>
                <Link to ="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
            <div className={styles.menuButton} onClick={toggleMenu}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
    )
}

export default Header
