import stylesCard from '../assets/css/Cards.module.css'
import Card from 'react-bootstrap/Card'
import imagemUm from '../assets/images/yaris-gr.jpg'
import imagemDois from '../assets/images/mercedes.jpg'
import imagemTres from '../assets/images/f-150.jpg'
import imagemQuatro from '../assets/images/silverado-2500.jpg'
import imagemCinco from '../assets/images/Audi-Q8.jpg'
import imagemSeis from '../assets/images/BMW-M5.jpg'
import imagemSete from '../assets/images/panamera.jpg'
import imagemOito from '../assets/images/purosangue.jpg'

const notes = [
    { imagem: imagemCinco, title: 'Audi Q8 E-Tron', text: 'O Audi Q8 E-Tron representa o próximo avanço progressivo na mobilidade elétrica premium, destacando-se por sua tecnologia de bateria atualizada, design marcante e dinâmica de condução aprimorada.'},
    { imagem: imagemSeis, title: 'BMW 5 Series M Sport', text: 'Apresentando um design exterior progressivo, o novo BMW Série 5 expressa sua presença robusta e um toque esportivo de maneira mais vívida do que nunca.'},
    { imagem: imagemSete, title: 'Porsche Panamera Turbo E-Hybrid', text: 'A Panamera é para aqueles que utilizam a liberdade para seguir seus instintos. Que se expressam na forma como viajam, não apenas ao alcançar seu destino.'},
    { imagem: imagemOito, title: 'Ferrari Purosangue', text: 'A Ferrari Purosangue é o primeiro carro de quatro portas e quatro lugares na história da Ferrari, mas modelos com dois assentos traseiros desempenharam um papel significativo na estratégia da empresa desde o início.'},
    { imagem: imagemUm, title: 'Toyota GR Yaris' , text: 'O Novo GR Yaris é instantaneamente considerado um clássico dos hatchs, impulsionado por um motor turbo de três cilindros para oferecer ainda mais potência e torque.'},
    { imagem: imagemDois, title: 'Mercedes-AMG S 63 E', text: 'O novo Mercedes-AMG S 63 E PERFORMANCE combina desempenho sem limites com tecnologia inovadora e luxo incomparável.'},
    { imagem: imagemTres, title: 'Ford F-150 Raptor', text: 'O Ford F-150 oferece os melhores atributos de uma picape moderna: potência, eficiência, conforto e capacidade. '},
    { imagem: imagemQuatro, title: 'Chevrolet Silverado 2500', text: 'Com força lendária e capacidade avançada, o Silverado 2024 está pronto para enfrentar qualquer desafio que surja em seu caminho.'}
];

function Note() {
    return (
        <div className={stylesCard["container-notes"]}>
            {notes.map((note, index) => (
                <Card key={index} className={stylesCard["note-card"]}>
                    <Card.Img 
                        className={stylesCard["note-img"]}
                        variant='top'
                        src={note.imagem}    
                    />
                    <Card.Body>
                        <Card.Title className={stylesCard["title-note"]}>{note.title}</Card.Title>
                        <Card.Text className={stylesCard["text-note"]}>{note.text}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Note;