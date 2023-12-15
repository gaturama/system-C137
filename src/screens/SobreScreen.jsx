import { Link } from 'react-router-dom';
import styles from '../assets/css/Home.module.css';
import story from '../assets/css/Historia.module.css'
import logo from '../assets/img/System C-137.png';
import rede from '../assets/img/logo-whatsapp.png';
import { Carousel } from "react-bootstrap";

export default function SobreScreen() {
    return (
        <>
            <header className={styles["container-home"]}>
                <div className={styles["logotipo"]}>
                    <img src={logo} alt='logotipo' />
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
                <div className={story['historia']}>
                    <h2 className={story['titulo']}>Jornada da System C-137: Paixão pelo Automobilismo</h2>
                    <p className={story['texto']}>
                        Nos primeiros dias do novo milênio, na ensolarada Flórida, um empreendedor destemido chamado Ryan Mitchell vislumbrou uma oportunidade única no crescente mercado automotivo. Com uma paixão por carros desde a adolescência e uma visão empreendedora, Ryan decidiu fundar a System C-137, uma empresa dedicada à venda de autopeças especializadas. <br />
                        <br />O ano era 2002 quando Ryan abriu as portas da sua pequena loja de autopeças em Miami. Inicialmente focada em rodas e pneus exclusivos, a System C-137 rapidamente ganhou destaque pela sua variedade única de produtos e pelo atendimento personalizado. A loja não era apenas um ponto de venda; era um espaço onde entusiastas de carros se reuniam para compartilhar suas paixões e experiências. <br />
                        <br />Conforme a popularidade da System C-137 crescia, Ryan expandiu o catálogo de produtos para incluir volantes esportivos, filtros de alta performance e acessórios automotivos de qualidade. Sua abordagem inovadora para o atendimento ao cliente e a busca incessante pela excelência em qualidade tornaram a System C-137 uma referência no setor de autopeças na região da Flórida. <br />
                        <br />No decorrer dos anos, a empresa não apenas sobreviveu às mudanças econômicas e tecnológicas, mas prosperou. A System C-137 abraçou as novas tecnologias de comércio eletrônico, expandindo sua presença para além das fronteiras da Flórida e alcançando clientes em todo o país. Com uma equipe dedicada e um compromisso inabalável com a qualidade, a empresa conquistou a confiança de uma comunidade crescente de amantes de carros. <br />
                        <br />Hoje, a System C-137 é mais do que uma loja de autopeças; é uma marca reconhecida por sua paixão pelo automobilismo, seu compromisso com a qualidade e seu papel ativo na comunidade automotiva. O legado de Ryan Mitchell continua, e a System C-137 está pronta para enfrentar os desafios e oportunidades do futuro, mantendo viva a chama que a fez prosperar desde os seus humildes começos no início dos anos 2000.
                    </p>
                </div>
            </main>
            <footer>
                
            </footer>
        </>
    )
}