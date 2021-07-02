import React from 'react';
import classes from '../Styles/programme.module.css';

import logo from '../assets/ssipmt-full-logo1.png';
import Heading from '../utils/Heading';

const Programme = () => {
  return (
    <div>
      <div className="text-center pt-3">
        <h3 style={{ color: 'blue' }}>
          One Week Joint Teachers Training Programme (TTP-2021)
        </h3>
        <h3 style={{ color: 'red' }}>(Online Mode)</h3>
        <h4 style={{ color: 'black' }}>on</h4>
        <h3 style={{ color: 'red' }}>
          "The Importance of Outcome Based Education (OBE) in New Education
          Policy"
        </h3>
        <h4 style={{ color: 'blue' }}>
          Date: 26th July(MON) - 31st July(SAT) 2021
        </h4>
        <hr style={{ width: '80%' }} />
        <a href="https://www.ssipmt.com/" rel="noreferrer" target="_blank">
          <img className={classes.logo} src={logo} alt="logo" />
        </a>
        <hr style={{ width: '80%' }} />
      </div>
      <div className="container pt-5" id="programme">
        {/* <h1 className="text-center text-primary pb-4">Programme</h1> */}
        <Heading name="Programme" />
        <div>
          <h3 className="text-danger pb-3">Objective</h3>
          <p className="word-align">
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
            <li>
              Issues in Traditional Education System and How New Education
              Policy Will Change the Education System.
            </li>
            <li>NIRF Ranking System</li>
            <li>NEP-2020: Way Ahead</li>
            <li>World Education System and NEP</li>
            <li>Implementation of NEP 2020</li>
            <li>Philosophy of OBE, Blooms Taxonomy and Teaching Pedagogy</li>
            <li>Concept of Outcome-Based Education System and OBE Framework</li>
            <li>
              Developing Course Outcomes of a Subject and Innovative Techniques
              in Teaching
            </li>
            <li>Design and Process of POs, PSOs and SWOT Analysis</li>
            <li>CO – PO Mapping and Computation </li>
            <li>
              Student Centric Teaching-Learning Process and Use of ICT Tools
            </li>
            <li>
              Student Centric Teaching-Learning Process and Use of ICT Tools
            </li>
            <li>Digital Education During Covid-19 Situation</li>
            <li>Introduction to MOOC and Moodle</li>
            <li>Need and Importance of Accreditation and Process of NBA </li>
            <li>Industry 4.0 oriented Curriculum Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programme;
