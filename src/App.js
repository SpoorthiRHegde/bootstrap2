import React from 'react';
import Header from './components/Header';
import BookCarousel from './components/BookCarousel';
import BookCard from './components/BookCard';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'; // Custom CSS file

function App() {
    const books = [
        {
            image: 'https://th.bing.com/th/id/OIP.SJrJBCkFxthW5BMIfUTZsgHaKV?w=202&h=282&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title: 'The Catcher in the Rye',
            author: 'J. D. Salinger',
            price: 999,
            description: 'The Catcher in the Rye is a novel by American author J. D. Salinger that was partially published in serial form in 1945–46 before being novelized in 1951. Originally intended for adults, it is often read by adolescents for its themes of angst and alienation, and as a critique of superficiality in society.'
        },
        {
            image: 'https://th.bing.com/th/id/OIP.cHaRAiZ5Z7UT4zbM6_qfVQHaHa?w=700&h=700&rs=1&pid=ImgDetMain',
            title: 'Harry Potter',
            author: 'J. K. Rowling',
            price: 12,
            description: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.'
        },
        {
            image: 'https://th.bing.com/th/id/OIP.NcfWlYVc-gIoLANd1iBLlQHaLI?w=202&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title: 'The White Tiger',
            author: 'Ramin Bahrani',
            price: 12,
            description: 'The White Tiger is a novel by Indian author Aravind Adiga. It was published in 2008 and won the 40th Booker Prize the same year. The novel provides a darkly humorous perspective of India class struggle in a globalized world as told through a retrospective narration from Balram Halwai, a village boy.'
        },
    ];

    return (
        <div>
            <Header />
            <BookCarousel />
            <Container className="mt-5">
                <Row>
                    {books.map((book, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <BookCard 
                                image={book.image}
                                title={book.title}
                                author={book.author}
                                price={book.price}
                                description={book.description}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
