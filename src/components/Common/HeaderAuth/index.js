import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';

import InserirCultivoModal from '../../InserirEventoModal';

import { StyledLink as Link, StyledNavbar as Navbar } from './styles';

function Header() {
  const [showInserirEventoModal, setShowInserirEventoModal] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <p>Eventos App</p>
          </Nav>
          <Button
            variant="success"
            onClick={() => {
              setShowInserirEventoModal(true);
            }}
            style={{ marginRight: '10px' }}
          >
            + Evento
          </Button>
          <Link to="/logout">Logout</Link>
        </Navbar.Collapse>
      </Navbar>
      <InserirCultivoModal
        show={showInserirEventoModal}
        onHide={() => setShowInserirEventoModal(false)}
      />
    </>
  );
}

export default Header;
