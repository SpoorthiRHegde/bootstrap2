import React from 'react';
import { Card, Button } from 'react-bootstrap';

function BookCard({ image, title, author, price, description }) {
    return (
        <Card className="book-card">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <strong>Author:</strong> {author}
                </Card.Text>
                <Card.Text>
                    <strong>Price:</strong> ${price}
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
                <Button variant="secondary" className="ml-2">View Details</Button>
            </Card.Body>
        </Card>
    );
}

export default BookCard;
