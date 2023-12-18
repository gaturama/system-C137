import { Card, Form, Button } from 'react-bootstrap';
import stylesCard from '../assets/css/Cards.module.css';
import user from '../assets/img/user.png';

export default function Login() {
    return (
        <Card className={stylesCard["login-card"]}>
            <Card.Body>
                <Card.Img className={stylesCard['user']} src={user} />
                <Card.Title className={stylesCard['title-login']}>Login</Card.Title>
                <Form>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type='password' placeholder='Password' />
                    </Form.Group>
                    <Button className={stylesCard['button-login']} variant='primary' type='submit'>
                        Entrar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}