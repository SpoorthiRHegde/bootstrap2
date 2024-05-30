import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start mt-5">
            <Container className="p-4">
                <Row>
                    <Col lg="6" md="12" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Happy Reading</h5>
                        <p>
                            Thank you for visiting our page.
                        </p>
                    </Col>
                    <Col lg="3" md="6" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-dark">Privacy Policy</a></li>
                            <li><a href="#!" className="text-dark">Terms of Service</a></li>
                            <li><a href="#!" className="text-dark">Contact</a></li>
                        </ul>
                    </Col>
                    <Col lg="3" md="6" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Social Media</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-dark">Facebook</a></li>
                            <li><a href="#!" className="text-dark">Twitter</a></li>
                            <li><a href="#!" className="text-dark">Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 BookStore
            </div>
        </footer>
    );
}

export default Footer;
