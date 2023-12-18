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
                    <Link to="/login">
                        <img src={login} alt="login" />
                        <p className={styles["log"]}>Login</p>
                    </Link>
                </div>
            </header>
            <main>

            </main>
        </>
    )
}