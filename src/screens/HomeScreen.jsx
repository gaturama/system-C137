import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import styles from '../assets/css/Home.module.css';
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
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <input type="text" placeholder="Pesquisar..." className={styles["search-bar"]} />
                    </ul>
                </nav>
                <div className={styles["redes"]}>
                    <svg width="25" height="25" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path filRule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51-.174-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </header>
            <main>
                <div className={styles["container-carousel"]}>
                    <Carousel>
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