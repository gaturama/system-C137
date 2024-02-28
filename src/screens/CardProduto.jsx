import stylesCard from '../assets/css/Cards.module.css';
import imagemUm from '../assets/img/rodas-audi.png';
import imagemDois from '../assets/img/rodas-bmw.png';
import imagemTres from '../assets/img/rodas-volks.png';
import imagemQuatro from '../assets/img/pneu-bridgestone.jpg';
import imagemCinco from '../assets/img/pneu-continental.jpg';
import imagemSeis from '../assets/img/pneu-pirelli.jpg';
import imagemSete from '../assets/img/volante-lotse.png';
import imagemOito from '../assets/img/volante-lotseMaxx.png';
import imagemNove from '../assets/img/volante-lotseVelox.png';
import imagemDez from '../assets/img/filtro-ar.png';
import imagemOnze from '../assets/img/filtro-intake.png';
import imagemDoze from '../assets/img/filtro-oleo.png';
import imagemTreze from '../assets/img/roda-mercedes.png';
import imagemQuatorze from '../assets/img/pneu-farroad.jpg';
import imagemQuinze from '../assets/img/volante-lotseGT.png';
import imagemDezesseis from '../assets/img/filtro-combustivel.jpg';
import imagemDezessete from '../assets/img/kit-limpezaK&N.png';
import imagemDezoito from '../assets/img/pneu-michelin.jpg';
import imagemDezenovo from '../assets/img/roda-volcano.png';
import imagemVinte from '../assets/img/volante-lotseNoPrep.png';
import Card from 'react-bootstrap/Card';

const produtos = [
    { imagem: imagemUm, title: 'Audi', text: 'Rodas Aro 18 Audi RS6 Avant | Preta Diamantada', value: 'R$ 5.760,00' },
    { imagem: imagemDois, title: 'BMW', text: 'Rodas Aro 19 BMW M4 Competition | Preta Diamantada', value: 'R$ 4.480,00' },
    { imagem: imagemTreze, title: 'Mercedes', text: 'Rodas Aro 19 Mercedes C63 AMG | Preta Diamantada', value: 'R$ 6.440,00' },
    { imagem: imagemTres, title: 'Volkswagen', text: 'Rodas Aro 20 Vw Tiguan R Line | Preta Diamantada', value: 'R$ 6.400,00' },
    { imagem: imagemDezenovo, title: 'TSW', text: 'Roda Aro 18 Volcano Daimler | Preta Diamantada', value: "R$ 790,00" },
    { imagem: imagemDezoito, title: "Michelin", text: 'Pneu Michelin Aro 18 Pilot Sport 3 255/40R18 99Y XL', value: 'R$ 1.610,90' },
    { imagem: imagemQuatro, title: 'Bridgestone', text: 'Pneu Bridgestone Aro 18 Potenza 245/35R18 88Y Run Flat', value: 'R$ 3.050,00' },
    { imagem: imagemCinco, title: 'Continental', text: 'Pneu Continental Aro 18 ContiSportContact 245/45R18 100W XL', value: 'R$ 2.600,00' },
    { imagem: imagemQuatorze, title: 'Farroad', text: 'Pneu Farroad Aro 17 X-Arrow 225/45R17 94V', value: 'R$ 420,99' },
    { imagem: imagemSeis, title: 'Pirelli', text: 'Pneu Pirelli Aro 19 Scorpion Zero 255/50R19 107Y XL', value: 'R$ 2.110,00' },
    { imagem: imagemSete, title: 'Lotse', text: 'Volante Lotse Dakar Preto Camursa | Tarja Vermelha', value: 'R$ 595,00' },
    { imagem: imagemQuinze, title: 'Lotse', text: 'Volante Lotse R GT Preto Camursa | Tarja Amarela', value: 'R$ 615,00' },
    { imagem: imagemOito, title: 'Lotse', text: 'Volante Lotse Maxx Preto Couro | Tarja Amarela', value: 'R$ 605,99' },
    { imagem: imagemNove, title: 'Lotse', text: 'Volante Lotse Velox Preto Camursa | Tarja Amarela', value: 'R$ 600,00' },
    { imagem: imagemVinte, title: 'Lotse', text: 'Volante Lotse No Prep Alumínio + Botão TwoStep', value: 'R$ 660,00' },
    { imagem: imagemDez, title: 'K&N', text: 'Filtro de Ar Cônico KN RF-1042 para Motor V8 4 Pol', value: 'R$ 465,00' },
    { imagem: imagemOnze, title: 'K&N', text: 'Filtro de Ar Esportivo Intake para VW Golf MK7 2.0 +12HP', value: 'R$ 3.110,00' },
    { imagem: imagemDoze, title: 'K&N', text: 'Filtro de Oleo Performance HP-2005 para VW e Audi', value: 'R$ 170,00' },
    { imagem: imagemDezesseis, title: 'K&N', text: 'Filtro de Combustível Premium Flow PF 1000 HP-2006', value: 'R$ 169,99' },
    { imagem: imagemDezessete, title: 'K&N', text: 'Squeeze Kit Limpeza Filtro de Ar Recharger 99-5050', value: 'R$ 119,99' }
];

function Produto() {
    return (
        <div className={stylesCard["container-products"]}>
            {produtos.map((produto, index) => (
                <Card key={index} className={stylesCard["product-card"]}>
                    <Card.Img
                        className={stylesCard["card-img"]}
                        variant="top"
                        src={produto.imagem}
                    />
                    <Card.Body>
                        <Card.Title className={stylesCard["title-card"]}>{produto.title}</Card.Title>
                        <Card.Text className={stylesCard["text-card"]}>{produto.text}</Card.Text>
                        <Card.Text className={stylesCard["value-card"]}>{produto.value}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Produto;