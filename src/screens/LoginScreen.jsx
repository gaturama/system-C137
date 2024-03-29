import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../assets/img/System C-137.png';
import login from '../assets/img/login.png';
import styles from '../assets/css/Home.module.css'
import Login from './CardLogin';

export default function LoginScreen() {
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
                    <li className={styles['log']}><Link className={styles['log-link']} to="/login">Login</Link></li>
                </div>
            </header>
            <main>
                <Login />
            </main>
        </>
    )
}