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
import Card from 'react-bootstrap/Card';

const produtos = [
    { imagem: imagemUm, title: 'Audi', text: 'Rodas Aro 18 Audi RS6 Avant | Preta Diamantada', value: 'R$' },
    { imagem: imagemDois, title: 'BMW', text: 'Rodas Aro 19 BMW M4 CS | Preta Diamantada', value: 'R$' },
    { imagem: imagemTres, title: 'Volkswagen', text: 'Rodas Aro 20 Vw Tiguan R Line | Preta Diamantada', value: 'R$'  },
    { imagem: imagemQuatro, title: 'Bridgestone', text: 'Pneu Bridgestone Aro 18 Potenza S001', value: 'R$'  },
    { imagem: imagemCinco, title: 'Continental', text: 'Pneu Continental Aro 18 ContiSportContact 3', value: 'R$'  },
    { imagem: imagemSeis, title: 'Pirelli', text: 'Pneu Pirelli Aro 18 P Zero', value: 'R$'  },
    { imagem: imagemSete, title: 'Lotse', text: 'Volante Lotse Dakar', value: 'R$'  },
    { imagem: imagemOito, title: 'Lotse', text: 'Volante Lotse Maxx Competition', value: 'R$'  },
    { imagem: imagemNove, title: 'Lotse', text: 'Volante Lotse Ring', value: 'R$'  },
    { imagem: imagemDez, title: 'K&N', text: 'Filtro de Ar Esportivo', value: 'R$'  },
    { imagem: imagemOnze, title: 'K&N', text: 'Filtro Intake Esportivo', value: 'R$'  },
    { imagem: imagemDoze, title: 'K&N', text: 'Filtro de Oleo Performance', value: 'R$' }
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