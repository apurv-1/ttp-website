import React from 'react';
import classes from '../Styles/programme.module.css';
import logo from '../assets/ssipmt-logo.png';

const Programme = () => {
  return (
    <div>
      <div className="text-center pt-3">
        <h3 style={{ color: 'blue' }}>
          One Week Teachers Training Programme (TTP-2021)
        </h3>
        <h3 style={{ color: 'red' }}>(Online Mode)</h3>
        <h4 style={{ color: 'black' }}>on</h4>
        <h3 style={{ color: 'red' }}>
          "The Importance of Outcome Based Education (OBE) in New Education
          Policy"
        </h3>
        <h4 style={{ color: 'blue' }}>
          Date: 26th July(MON) - 30st July(FRI) 2021
        </h4>

        <a href="https://www.ssipmt.com/" target="_blank">
          <img
            class=" wow fadeInDown mcq"
            wow-data-delay="0.0s"
            wow-data-duration="0.9s"
            width="40%"
            height="20%"
            src={logo}
            alt="logo"
          />
        </a>
      </div>

      <div className="container">
        <h1 className="text-center text-primary pt-5 pb-4">Programme</h1>
        <div>
          <h3 className="text-danger pb-3">Objective</h3>
          <p>
            The objective of the proposed FDP is to Familiarize the faculties
            with the concept of outcome-based education with more focus on
            adaption and implementation. To bring out the advantage of OBE over
            conventional education and focus on higher-order learning and
            professional skills necessitate a paradigm shift in traditional
            practices of curriculum design, education delivery, and assessment.
          </p>
          <h3 className="text-danger pb-3">Outcome</h3>
          <p>
            After the completion of the FDP the participants would be able to
            Understand
          </p>
          <ul className={classes.list}>
            <li>The implementation of OBE in NBA.</li>
            <li>Outcome Based curriculum and its significance</li>
            <li>Curriculum gap and its identification</li>
            <li>CO – PO mapping and computation</li>
            <li>
              Teaching Learning Process and Innovation Ecosystem Strategies with
              Academic R&D
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programme;
