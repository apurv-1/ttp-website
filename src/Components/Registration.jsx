import React from 'react';
// import classes from "../Styles/registration.module.css";
import Heading from '../utils/Heading';

const Registration = () => {
  const onSumbitHandle = (e) => {
    e.preventDefault();
    const link =
      'https://docs.google.com/forms/d/e/1FAIpQLSfFFWM_y0JCi78Mv6Lzf69UYqfNHJDY22eC6TBA_h3bMHyd5A/viewform';
    window.open(link, '_blank');
  };

  return (
    <div className="container">
      <div className="pb-4" id="Registration">
        <Heading name="Certification" />
        <h4 style={{ color: 'red' }}>
          Certificates will be issued subject to the participants qualifying the
          following conditions:
        </h4>
        <p>
          a) Minimum 80% attendance.
          <br />
          b) Minimum 60% marks in the exam conducted on last day of the program.
        </p>
      </div>
      <div>
        <Heading name="Registration" />
        <div className="pb-3">
          <h3 className="text-danger pb-2">Who can participate</h3>
          <p>
            Faculty from AICTE approved institutions across the country of
            relevant disciplines. Batch Size is limited to maximum of 100
            participants.
          </p>
        </div>
        <div className="pb-3">
          <h3 className="text-danger pb-2">Eligible Disciplines:</h3>
          <p>
            The course will be open to all branches of Engineering, Management,
            Computer Application and Polytechnic.
          </p>
        </div>
        <p className="text-center" style={{ color: 'red' }}>
          (No Registration Fee & Participation on First Come First Serve Basis)
        </p>
        <div className="col-md-12 text-center pb-3">
          <button className="btn btn-dark" onClick={(e) => onSumbitHandle(e)}>
            Register here
          </button>
        </div>
        <div className="text-center pb-4">
          <h4 style={{ color: 'red' }}>Last date For Registration:</h4>
          <h5>22nd July 2021, Thursday</h5>
        </div>
      </div>
    </div>
  );
};

export default Registration;
