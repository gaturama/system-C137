import stylesCard from '../assets/css/Cards.module.css';
import imagemUm from '../assets/img/rodas-audi.png';
import imagemDois from '../assets/img/rodas-bmw.png';
import imagemTres from '../assets/img/rodas-volks.png';
import imagemQuatro from '../assets/img/pneu-bridgestone.jpg';
import imagemCinco from '../assets/img/pneu-continental.jpg';
import imagemSeis from '../assets/img/pneu-pirelli.jpg';
import imagemSete from '../assets/img/volante-lotse.png';
import imagemOito from '../assets/img/volante-lotseMaxx.png';
import imagemNove from '../assets/img/volante-lotseRing.png';
import imagemDez from '../assets/img/filtro-ar.png';
import imagemOnze from '../assets/img/filtro-intake.png';
import imagemDoze from '../assets/img/filtro-oleo.png';
import imagemTreze from '../assets/img/roda-mercedes.png';
import imagemQuatorze from '../assets/img/pneu-farroad.jpg';
import imagemQuinze from '../assets/img/volante-lotseGT.png';
import imagemDezesseis from '../assets/img/filtro-combustivel.jpg'
import Card from 'react-bootstrap/Card';

const produtos = [
    { imagem: imagemUm, title: 'Audi', text: 'Rodas Aro 18 Audi RS6 Avant | Preta Diamantada', value: 'R$ 7.199,99' },
    { imagem: imagemDois, title: 'BMW', text: 'Rodas Aro 19 BMW M4 CS | Preta Diamantada', value: 'R$ 5.599,00' },
    { imagem: imagemTreze, title: 'Mercedes', text: 'Rodas Aro 19 Mercedes C63 AMG | Preta Diamantada', value: 'R$ 8.049,00'},
    { imagem: imagemTres, title: 'Volkswagen', text: 'Rodas Aro 20 Vw Tiguan R Line | Preta Diamantada', value: 'R$ 7.999,99'  },
    { imagem: imagemQuatro, title: 'Bridgestone', text: 'Pneu Bridgestone Aro 18 Potenza S001', value: 'R$ 3.799,90'  },
    { imagem: imagemCinco, title: 'Continental', text: 'Pneu Continental Aro 18 ContiSportContact 3', value: 'R$ 3.245,90'  },
    { imagem: imagemQuatorze, title: 'Farroad', text: 'Pneu Farroad Aro 17 X-Arrow 225', value: 'R$ 518,13'},
    { imagem: imagemSeis, title: 'Pirelli', text: 'Pneu Pirelli Aro 19 Scorpion Zero', value: 'R$ 2.639,90'  },
    { imagem: imagemSete, title: 'Lotse', text: 'Volante Lotse Dakar', value: 'R$ 745,90'  },
    { imagem: imagemQuinze, title: 'Lotse', text: 'Volante Lotse R GT', value: 'R$ 769,90'},
    { imagem: imagemOito, title: 'Lotse', text: 'Volante Lotse Maxx', value: 'R$ 759,90'  },
    { imagem: imagemNove, title: 'Lotse', text: 'Volante Lotse Ring', value: 'R$ 759,90'  },
    { imagem: imagemDez, title: 'K&N', text: 'Filtro de Ar Esportivo', value: 'R$ 379,90'  },
    { imagem: imagemOnze, title: 'K&N', text: 'Filtro Intake Esportivo', value: 'R$ 3.890,90'  },
    { imagem: imagemDoze, title: 'K&N', text: 'Filtro de Oleo Performance', value: 'R$ 215,90' },
    { imagem: imagemDezesseis, title: 'K&N', text: 'Filtro de Combustível', value: 'R$ 210,00'}
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