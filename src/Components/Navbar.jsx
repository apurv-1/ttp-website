import React from 'react';
import ScrollToElement from 'scroll-to-element';
import logo from '../assets/ssipmt-min.png';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigationbar = () => {
  const scroll = (id) => {
    const elem = document.querySelector(`#${id}`);
    ScrollToElement(elem, {
      offset: 0,
      ease: 'inQuart',
      duration: 500,
    });
  };

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
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('Home');
                }}
              >
                Home
              </a>
            </Nav.Link>

            <Nav.Link>
              <a
                onClick={() => {
                  scroll('programme');
                }}
              >
                Programme
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('Topics');
                }}
              >
                Topics
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('Speakers');
                }}
              >
                Speakers
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('Registration');
                }}
              >
                Registration
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('ssipmt_raipur');
                }}
              >
                SSIPMT RAIPUR
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('CSVTU');
                }}
              >
                CSVTU
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('Coordinators');
                }}
              >
                Coordinators
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigationbar;
