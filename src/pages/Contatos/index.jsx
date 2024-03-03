import styles from './Contatos.module.css'
import { GoMail } from 'react-icons/go'
import { TfiInstagram } from "react-icons/tfi";
import { SiYoutube } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre</p>
            <div className={styles.icones}>

                <a href="mailto:gabrielcardozococ@gmail.com" target="_blank" rel="noopener nooreferer">
                    <GoMail className={styles.icone} />
                </a>

                <a href="https://www.instagram.com/" target="_blank" rel="noopener nooreferer">
                    <TfiInstagram className={styles.icone} />
                </a>

                <a href="https://www.youtube.com/" target="_blank" rel="noopener nooreferer">
                    <SiYoutube className={styles.icone} />
                </a>

                <a href="https://www.github.com/" target="_blank" rel="noopener nooreferer">
                    <FaGithub className={styles.icone} />
                </a>

                <a href="https://www.linkedin.com/" target="_blank" rel="noopener nooreferer">
                    <FaLinkedin className={styles.icone} />
                </a>

            </div>
        </section>
    )
}

export default Contatos
