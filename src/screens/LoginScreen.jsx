import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/System C-137.png';
import login from '../assets/img/login.png';
import styles from '../assets/css/Home.module.css'
import Login from './CardLogin';

export default function LoginScreen() {
    const navigate = useNavigate();
    
    const handleLoginClick = () => {
        navigate.push("/login");
    }

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
                    <img 
                        src={login}
                        alt='login'
                        className={styles["login-image"] + " clickable"}
                        onClick={handleLoginClick}
                    />
                    <p className={styles["log"]}>Login</p>
                </div>
            </header>
            <main>
                <Login />
            </main>
        </>
    )
}