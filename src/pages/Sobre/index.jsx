import styles from './Sobre.module.css'
import avatar from './images/avatar.png'
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDjango, SiPowerbi } from "react-icons/si";

function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar}/>
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Me chamo <span>Gabriel Cardozo</span> <br />
                    <strong>Dev BackEnd</strong> </p>

                    <p>Trabalho com desenvolvimento web desde 2023.</p>

                    <p>Gosto de desafios de transformar idéias em realidade digital.</p>

                    <p>Especializado em criar soluções para melhorar a esperiência do usuário <br />
                    deixando as tarefas do dia a dia mais dinâmicas e intuitivas.</p> 
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <FaPython className={styles.iconetech} />
                    <BiLogoPostgresql className={styles.iconetech} />
                    <SiDjango className={styles.iconetech} />
                    <SiPowerbi className={styles.iconetech} />
                </div>
            </div>

        </section>
    )
}

export default Sobre
