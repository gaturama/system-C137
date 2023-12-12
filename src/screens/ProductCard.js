import React from "react";
import { Card } from 'react-bootstrap';
import styles from '../assets/css/Home.module.css'

const ProductCard = ({ imagem, titulo, descricao }) => {
    return (
        <Card className={styles['product-card']} style={{ width: '18rem' }}>
            <Card.Img
                className={styles['card-img']}
                variant="top"
                src={imagem}
                alt={titulo}
            />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descricao}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;