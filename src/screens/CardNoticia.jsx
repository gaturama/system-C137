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
    { imagem: imagemCinco, title: 'Audi Q8 E-Tron', text: 'The Audi Q8 e-tron is the next progressive step in premium electric mobility—featuring updated battery technology, striking design, and improved driving dynamics.'},
    { imagem: imagemSeis, title: 'BMW 5 Series M Sport', text: 'With a progressive exterior design, the new BMW 5 Series expresses its muscular presence and sporting appeal more vividly than ever.'},
    { imagem: imagemSete, title: 'Porsche Panamera Turbo E-Hybrid', text: 'The Panamera is for those who use freedom to follow their instincts. Who express themselves in the way they travel, not just in reaching their destination.'},
    { imagem: imagemOito, title: 'Ferrari Purosangue', text: 'The Ferrari Purosangue is the first ever four-door, four-seater car in Ferrari’s history, but models with two rear seats have played a significant role in the company’s strategy since the very beginning.'},
    { imagem: imagemUm, title: 'Toyota GR Yaris' , text: 'The GR Yaris just got even better. The product of constant improvement, the New GR Yaris is an instant hot hatch classic, powered by a turbocharged three-cylinder engine to deliver even more power and torque.'},
    { imagem: imagemDois, title: 'Mercedes-AMG S 63 E', text: 'Luxury has never meant such high-performance: The new Mercedes-AMG S 63 E PERFORMANCE combines unbridled performance with innovative technology and unsurpassed luxury.'},
    { imagem: imagemTres, title: 'Ford F-150 Raptor', text: 'The Ford F-150 offers the best attributes of a modern pickup: power, efficiency, comfort and capability. Add to that a huge range of configurations and options, and you have got a highly appealing light-duty pickup.'},
    { imagem: imagemQuatro, title: 'Chevrolet Silverado 2500', text: 'With legendary strength and advanced capability, the 2023 Silverado is ready for anything that comes your way.'}
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