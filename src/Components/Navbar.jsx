import React from 'react';
import ScrollToElement from 'scroll-to-element';
import logo from '../assets/ssipmt-nav.png';
import { Navbar, Nav } from 'react-bootstrap';
import classes from '../Styles/navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import samplePDF from '../assets/schedule.pdf';
import brochure from '../assets/brocher.pdf';

const Navigationbar = () => {
  const scroll = (id) => {
    const elem = document.querySelector(`#${id}`);
    ScrollToElement(elem, {
      offset: -90,
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
                className={classes.navlink}
                href="#home"
              >
                Home
              </a>
            </Nav.Link>

            <Nav.Link>
              <a
                onClick={() => {
                  scroll('programme');
                }}
                className={classes.navlink}
                href="#programme"
              >
                Programme
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('Topics');
                }}
                className={classes.navlink}
                href="#topics"
              >
                Topics
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('Speakers');
                }}
                className={classes.navlink}
                href="#speakers"
              >
                Speakers
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('Registration');
                }}
                className={classes.navlink}
                href="#registration"
              >
                Registration
              </a>
            </Nav.Link>
            <Nav.Link href={samplePDF} target="_blank">
              <a href className={classes.navlink}>
                Schedule
              </a>
            </Nav.Link>
            <Nav.Link href={brochure} target="_blank">
              <a href className={classes.navlink}>
                Brochure
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('ssipmt_raipur');
                }}
                className={classes.navlink}
                href="#ssipmt_raipur"
              >
                SSIPMT RAIPUR
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('CSVTU');
                }}
                className={classes.navlink}
                href="#csvtu"
              >
                CSVTU
              </a>
            </Nav.Link>
            <Nav.Link>
              <a
                onClick={() => {
                  scroll('Coordinators');
                }}
                className={classes.navlink}
                href="#coordinators"
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
