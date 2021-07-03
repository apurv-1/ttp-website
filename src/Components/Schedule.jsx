import React from 'react';
import samplePDF from '../assets/schedule.pdf';

const Schedule = () => {
  return (
    <div className="container d-flex justify-content-center">
      <a href={samplePDF} rel="noreferrer" target="_blank">
        <button className="btn btn-dark">Open Schedule</button>
      </a>
    </div>
  );
};

export default Schedule;
