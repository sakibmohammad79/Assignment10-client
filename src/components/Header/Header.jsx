import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
                <Link className="text-decoration-none text-white">Home</Link>
                <Link className="text-decoration-none text-white mx-3">Blog</Link>
                <Link className="text-decoration-none text-white">About</Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Link to='/login'><button type="button" class="btn btn-warning">Login</button></Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
