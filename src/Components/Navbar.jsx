import React from 'react';
// import '../Styles/navbar.module.css';
import logo from '../assets/ssipmt-min.png';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigationbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="70"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Programme</Nav.Link>
            <Nav.Link>Topics</Nav.Link>
            <Nav.Link>Speakers</Nav.Link>
            <Nav.Link>Registration</Nav.Link>
            <Nav.Link>SSIPMT RAIPUR</Nav.Link>
            <Nav.Link>CSVTU</Nav.Link>
            <Nav.Link>Coordinators</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigationbar;
