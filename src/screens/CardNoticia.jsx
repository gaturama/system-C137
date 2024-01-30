import stylesCard from '../assets/css/Cards.module.css'
import Card from 'react-bootstrap/Card'
import imagemUm from '../assets/images/yaris-gr.jpg'
import imagemDois from '../assets/images/mercedes.jpg'
import imagemTres from '../assets/images/f-150.jpg'
import imagemQuatro from '../assets/images/silverado-2500.jpg'

const notes = [
    { imagem: imagemUm, title: 'Toyota GR Yaris' , text: 'The GR Yaris just got even better. The product of constant improvement, the New GR Yaris is an instant hot hatch classic, powered by a turbocharged three-cylinder engine to deliver even more power and torque.'},
    { imagem: imagemDois, title: 'Mercedes AMG CLE', text: 'Character meets charisma in the all-new Mercedes-AMG CLE 53 4MATIC+ Coupé, blending thrilling performance, confident style and genuine comfort. Tailored to your unique taste.'},
    { imagem: imagemTres, title: 'Ford F-150 Lariat', text: 'The Ford F-150 offers the best attributes of a modern pickup: power, efficiency, comfort and capability. Add to that a huge range of configurations and options, and you have got a highly appealing light-duty pickup.'},
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