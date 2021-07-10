import React from 'react';
import classes from '../Styles/programme.module.css';

import logo from '../assets/ssipmt-full-logo1.png';
import Heading from '../utils/Heading';

const Programme = () => {
  return (
    <div>
      <div className="text-center pt-3">
        <h3 style={{ color: 'blue' }}>
          One Week Joint Teachers Training Programme{' '}
          <span className="brackets">(</span>TTP-2021
          <span className="brackets">)</span>
        </h3>
        <h3 style={{ color: 'red' }}>
          <span className="brackets">(</span>Online Mode
          <span className="brackets">)</span>
        </h3>
        <h4 style={{ color: 'black' }}>on</h4>
        <h3 style={{ color: 'red' }}>
          The Importance of Outcome Based Education in New Education Policy
        </h3>
        <h4 style={{ color: 'blue' }}>Date: 26th July - 31st July 2021</h4>
        <hr style={{ width: '80%' }} />

        <h1 className="text-center pt-2">Host Institution</h1>

        <a href="https://www.ssipmt.com/" rel="noreferrer" target="_blank">
          <img className={classes.logo} src={logo} alt="logo" />
        </a>
        <hr style={{ width: '80%' }} />
      </div>
      <div className="container pt-5" id="programme">
        <Heading name="Programme" />
        <div>
          <h3 className="text-danger pb-3">Objective</h3>
          <p className="word-align">
            The objective of the Joint Teachers Training Program is to
            familiarize the faculties with the concept of Outcome Based
            Education with more focus on the adaption and implementation of the
            National Education Policy <span className="brackets">(</span>NEP
            <span className="brackets">)</span> 2020. The policy envisages
            broad-based, multi-disciplinary, holistic Under Graduate education
            with creative combinations of subjects and integration of vocational
            education. It aims to increase Gross Enrolment Ratio in higher
            education, promote multilingualism and build the capacity of faculty
          </p>
          <h3 className="text-danger pb-3">Outcome</h3>
          <p>
            After the completion of the TTP the participants would be able to
            Understand
          </p>
          <ul className={classes.list}>
            <li>
              Understand the Importance of National Education Policy 2020.
            </li>
            <li>
              Understand the advantage of Outcome Based Education over
              conventional education
            </li>
            <li>
              Identify the curriculum gap and take steps to minimize the same.
            </li>
            <li>
              Design and Implement Outcome Based Curriculum in line with
              NEP-2020.
            </li>
            <li>
              Introduce Innovative Teaching-Learning Strategies and Processes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programme;
