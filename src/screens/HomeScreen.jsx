import { Link } from "react-router-dom";
import styles from '../assets/css/Home.module.css';
import login from '../assets/img/login.png';
import logo from '../assets/img/System C-137.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeScreen() {
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
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
                </nav>
                <div className={styles["login"]}>
                    <img src={login} />
                    <li className={styles['log']}><Link className={styles['log-link']} to='/login'>Login</Link></li>
                </div>
            </header>
            <main>

            </main>
        </>
    )
}