import React from 'react';
import classes from '../Styles/programme.module.css';

import logo from '../assets/ssipmt-full-logo1.png';
import Heading from '../utils/Heading';

const Programme = () => {
  return (
    <div>
      <div className="text-center pt-3">
        <h3 style={{ color: 'blue' }}>
          One Week Joint Teachers Training Programme <span className="brackets">(</span>TTP-2021<span className="brackets">)</span>
        </h3>
        <h3 style={{ color: 'red' }}><span className="brackets">(</span>Online Mode<span className="brackets">)</span></h3>
        <h4 style={{ color: 'black' }}>on</h4>
        <h3 style={{ color: 'red' }}>
          "The Importance of Outcome Based Education <span className="brackets">(</span>OBE<span className="brackets"><span className="brackets">)</span></span> in New Education
          Policy"
        </h3>
        <h4 style={{ color: 'blue' }}>
          Date: 26th July<span className="brackets">(</span>MON<span className="brackets">)<span className="brackets"></span></span> - 31st July<span className="brackets">(</span>SAT<span className="brackets">)</span> 2021
        </h4>
        <hr style={{ width: '80%' }} />
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
            The objective of the proposed TTP is to Familiarize the faculties
            with the concept of outcome-based education with more focus on
            adaption and implementation. To bring out the advantage of OBE over
            conventional education and focus on higher-order learning and
            professional skills necessitate a paradigm shift in traditional
            practices of curriculum design, education delivery, and assessment.
          </p>
          <h3 className="text-danger pb-3">Outcome</h3>
          <p>
            After the completion of the TTP the participants would be able to
            Understand
          </p>
          <ul className={classes.list}>
            <li>Importance of NEP 2020 and NIRF</li>
            <li>The implementation of OBE in NBA</li>
            <li>Outcome Based curriculum and its significance.</li>
            <li>Curriculum gap and its identification</li>
            <li>CO – PO mapping and computation</li>
            <li>
              Teaching Learning Process and Innovation Ecosystem Strategies with
              Acadmeic R&D
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programme;
