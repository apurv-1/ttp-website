import React from "react";
//css
import classes from "../Styles/home.module.css";
//logos
import aicte from "../assets/aicte-logo.png";
import csvtu from "../assets/csvtu-logo.png";
//bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div className={classes.root}>
      <Container>
        <Row className={classes.heading} >
          <Col>
            <img className={classes.logo__aicte} src={aicte} alt="aicte" />
          </Col>
          <Col xs={8} >
            <h3 className={classes.main__heading}>
              AICTE-CSVTU MoU Teachers Training Programme-2021
            </h3>
            <h4 className={classes.main__university}>
              Chhattisgarh Swami Vivekanand Technical University, Bhilai
            </h4>
            <h5>(State Government Owned Organization)</h5>
            <hr />
          </Col>
          <Col>
            <img className={classes.logo} src={csvtu} alt="aicte" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
