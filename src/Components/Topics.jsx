import React from 'react';
import classes from '../Styles/topics.module.css';
import Heading from '../utils/Heading';

const Topics = () => {
  return (
    <div className={classes.root} id="Topics">
      <div className="container pt-5">
        {/* <h1 className="text-center text-primary pb-3">Topics</h1> */}
        <Heading name="Topics to be Covered" />

        <h4 className="text-danger p-3">National Education Policy (NEP)</h4>
        <ul>
          <li>Reforms in the Education System through New Education Policy</li>
          <li>
            National Education Policy – Importance in Global Education System
          </li>
          <li>National Education Policy (NEP)-2020: A Way Ahead</li>
          <li>NISP-2019 in the Context of NEP-2020</li>
          <li>
            Restructuring Curriculum Framework for Higher Education in NEP 2020
          </li>
          <li>Industry4.0- Centric Curriculum Development</li>
        </ul>
        <h4 className="text-danger p-3">Outcome Based Education (OBE)</h4>
        <ul>
          <li>
            Need and Implementation of National Institutional Ranking Framework
          </li>
          <li>Applying Bloom’s Taxonomy in Teaching Pedagogy</li>
          <li>The Significance of Outcome Based Education and Framework</li>
          <li>Understanding the POs for the designing of PSOs and PEOs</li>
          <li>Process involved in Developing the Course Outcomes</li>
          <li>CO-PO Attainment in OBE</li>
          <li>Need and Importance of NBA Accreditation for HEIs</li>
        </ul>
        <h4 className="text-danger p-3">
          Information and Communication Technology (ICT)
        </h4>
        <ul>
          <li>Introduction to MOOC and Moodle</li>
          <li>
            Student-Centric Teaching-Learning Process and the Use of ICT Tools
          </li>
          <li>Digital Education During Covid-19</li>
        </ul>
        <span id="Speakers">
          <Heading name="Speakers" />
        </span>
      </div>
    </div>
  );
};

export default Topics;
