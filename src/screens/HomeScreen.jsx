import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import styles from '../assets/css/Home.module.css';
import rede from '../assets/img/logo-whatsapp.png';
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
                <div className={styles["redes"]}>
                    <a href="https://whatsapp.com/"><img src={rede} alt="redes" /></a>
                </div>
            </header>
            <main>
                <div className={styles["container-carousel"]}>
                    <Carousel controls={false} >
                        <Carousel.Item>
                            <img src='https://picsum.photos/1920/400' />
                            <Carousel.Caption>Slide 1</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='https://picsum.photos/1920/400' />
                            <Carousel.Caption>Slide 2</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src='https://picsum.photos/1920/400' />
                            <Carousel.Caption>Slide 3</Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </main>
        </>
    )
}