import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
            <Navbar.Brand href="#">  Dhyankendra</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Books</Nav.Link>
                    <Nav.Link href="#">Categories</Nav.Link>
                    <Nav.Link href="#">About Us</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                </Nav>
                <Form inline className="ml-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 search-input" />
                    <Button variant="outline-light" className="search-button">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
