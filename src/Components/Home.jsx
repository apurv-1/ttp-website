import React from "react";
//css
// import classes from '../Styles/home.module.css';
//logos
import aicte from "../assets/aicte-logo.png";
import csvtu from "../assets/csvtu-logo.png";
//bootstrap
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <div className="container text-center main-div pt-5 pb-5">
      <a href="https://www.aicte-india.org/" rel="noreferrer" target="_blank">
        <img
          style={{ float: "left" }}
          width="150"
          height="150"
          loading="lazy"
          className="d-inline-block"
          src={aicte}
          alt="logo"
        />
      </a>
      <a href="https://csvtu.ac.in/" rel="noreferrer" target="_blank">
        <img
          style={{ float: "right" }}
          width="160"
          height="150"
          loading="lazy"
          className="d-inline-block"
          src={csvtu}
          alt="logo"
        />
      </a>

      <h3 className="clg-div" id="tct">
        AICTE-CSVTU MoU Teachers Training Programme-2021
      </h3>
      <div className="uni-dev">Chhattisgarh Swami Vivekanand Technical University, Bhilai </div>
      <h4 style={{ color: "black" }}>(State Government Owned Organization)</h4>
      <hr />
    </div>
  );
};

export default Home;
