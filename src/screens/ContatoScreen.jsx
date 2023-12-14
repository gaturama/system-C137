import { Link } from "react-router-dom";
import styles from '../assets/css/Home.module.css';
import logo from '../assets/img/System C-137.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import rede from '../assets/img/logo-whatsapp.png';

export default function ContatoScreen() {
    return (
        <>
            <header className={styles["container-home"]}>
                <div className={styles["logotipo"]}>
                    <img src={logo} alt="logotipo" />
                </div>
                <nav>
                    <ul className={styles["container-menu"]}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/produto">Produtos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
                <div className={styles["redes"]}>
                    <a href="https://whatsapp.com/"><img src={rede} alt="redes" /></a>
                </div>
            </header>
        </>
    )
}