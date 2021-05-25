import React from 'react';
import classes from '../Styles/topics.module.css';

const Topics = () => {
  return (
    <div className={classes.root} id="Topics">
      <div className="container pt-5">
        <h1 className="text-center text-primary pb-3">Topics</h1>
        <h3 className="text-danger pb-2">Topics to be Covered</h3>

        <ul>
          <li>
            <h5>
              Issues in Traditional Education System and how will New Education
              Policy change the education system
            </h5>
          </li>
          <li>
            <h5>Concept of Outcome Based Education System and OBE Framework</h5>
          </li>
          <li>
            <h5>Outcome Based curriculum and its significance.</h5>
          </li>
          <li>
            <h5>
              Need and importance of Accreditation and Process of NBA
              Accreditation, Vision, Mission and PEOs
            </h5>
          </li>
          <li>
            <h5>Design and Process of PSOs and POs and SWOT Analysis.</h5>
          </li>
          <li>
            <h5>
              Identification of Curriculum gap and Content Beyond Syllabus.
            </h5>
          </li>
          <li>
            <h5>Philosophy of OBE, Blooms Taxonomy and teaching pedagogy</h5>
          </li>
          <li>
            <h5>
              CO – PO mapping and computation, Experience sharing through paper
              and case study on CO-PO mapping and computation.
            </h5>
          </li>
          <li>
            <h5>
              Student Centric Teaching Learning Process and Use of ICT Tools
            </h5>
          </li>
          <li>
            <h5>Digital Education during Covid-19 situation</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topics;
