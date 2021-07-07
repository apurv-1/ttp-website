import React from 'react';
import classes from '../Styles/topics.module.css';
import Heading from '../utils/Heading';

const Topics = () => {
  return (
    <div className={classes.root} id="Topics">
      <div className="container pt-5">
        {/* <h1 className="text-center text-primary pb-3">Topics</h1> */}
        <Heading name="Topics" />
        <h3 className="text-danger pb-2">Topics to be Covered</h3>

        <ul>
          <li>
            Issues in Traditional Education System and How New Education Policy
            Will Change the Education System.
          </li>
          <li>NIRF Ranking System</li>
          <li>NEP-2020: Way Ahead</li>
          <li>World Education System and NEP</li>
          <li>Implementation of NEP 2020</li>
          <li>Philosophy of OBE, Blooms Taxonomy and Teaching Pedagogy</li>
          <li>Concept of Outcome-Based Education System and OBE Framework</li>
          <li>
            Developing Course Outcomes of a Subject and Innovative Techniques in
            Teaching
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
        <span id="Speakers">
        <Heading name="Speakers" />
        </span>
      </div>
      
    </div>
  );
};

export default Topics;
