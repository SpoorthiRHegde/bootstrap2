import React from 'react';
import { Carousel } from 'react-bootstrap';

function BookCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/1543429.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to the World of Knowledge</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/922681.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Dive Deep into the world of knowledge</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.wallpaperscraft.com/image/single/library_books_shelves_192916_1920x1080.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Explore the lastest book available in our store</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BookCarousel;
