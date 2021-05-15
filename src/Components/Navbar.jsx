import React from 'react';
// import '../Styles/navbar.module.css';
import logo from '../assets/ssipmt-min.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

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

// const Navbar = () => {
//   return (
//     <div>
//       {/* <div className="main-div">
//         <div className="menu">
//           <div className="navbar-wrapper isfixed">
//             <div className="container">
//               <div className="navwrapper">
//                 <div className="navbar navbar-inverse navbar-static-top">
//                   <div className="container">
//                     <div className="navArea">
//                       <div className="navbar-collapse collapse">
//                         <div className="topnav" id="myTopnav">
//                           <a href="#wrapper">Home</a>
//                           <a href="#prog">Programme</a>
//                           <a href="#tp">Topics</a>
//                           <a href="#gl">Speakers</a>

//                           <a href="#reg">Registration</a>

//                           <a href="#about">SSIPMT Raipur</a>
//                           <a href="#ab1">CSVTU</a>
//                           <a href="#coo">Coordinators</a>
//                           <a href="javascript:void(0);" class="icon">
//                             <i class="fa fa-bars"></i>
//                           </a>
//                         </div>
//                         <ul className="nav navbar-nav n">
//                           <li className="menuItem active">
//                             <a href="#wrapper">Home</a>
//                           </li>
//                           <li className="menuItem">
//                             <a href="#prog">Programme</a>
//                           </li>
//                           <li className="menuItem">
//                             <a href="#tp">Topics</a>
//                           </li>
//                           <li className="menuItem">
//                             <a href="#gl">Speakers</a>
//                           </li>
//                           <li className="menuItem">
//                             <a href="#reg">Registration</a>
//                           </li>

//                           <li className="menuItem">
//                             <a href="#about">SSIPMT RAIPUR</a>
//                           </li>
//                           <li className="menuItem">
//                             <a href="#ab1">CSVTU</a>
//                           </li>
//                           <li className="menuItem">
//                             <a href="#coo">Coordinators</a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Navbar;
