import stylesCard from '../assets/css/Cards.module.css'
import Card from 'react-bootstrap/Card'
import imagemUm from '../assets/images/yaris-gr.jpg'
import imagemDois from '../assets/images/mercedes.jpg'
import imagemTres from '../assets/images/f-150.jpg'
import imagemQuatro from '../assets/images/silverado-2500.jpg'

const notes = [
    { imagem: imagemUm, title: 'Toyota GR Yaris' , text: 'The GR Yaris just got even better. The product of constant improvement, the New GR Yaris is an instant hot hatch classic, powered by a turbocharged three-cylinder engine to deliver even more power and torque  and the introduction of a brand-new eight-speed GAZOO RACING.'},
    { imagem: imagemDois, title: 'Mercedes AMG CLE', text: ''},
    { imagem: imagemTres, title: 'Ford F-150 Lariat', text: ''},
    { imagem: imagemQuatro, title: 'Chevrolet Silverado 2500', text: ''}
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