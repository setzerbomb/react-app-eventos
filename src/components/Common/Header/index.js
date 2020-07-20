import React from 'react';
import { Nav } from 'react-bootstrap';

import { StyledLink as Link, StyledNavbar as Navbar } from './styles';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <p>Eventos App</p>
        </Nav>
        <Nav.Link href="#">
          <Link to="/login">Login</Link>
        </Nav.Link>
        <Nav.Link href="#">
          <Link to="/register">Registro</Link>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
