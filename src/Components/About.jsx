import React from 'react';
import classes from '../Styles/university.module.css';
// import ssipmt from '../assets/ssipmt-min.png';
// import aicte from '../assets/aicte-logo.png';
// import csvtu from '../assets/csvtu-logo.png';
import Heading from '../utils/Heading';

const University = () => {
  return (
    <div className={classes.root}>
      <div className="container pt-5" id="about">
        {/* <h1 className="text-center text-primary pb-4">About</h1> */}
        <Heading name="About" />
        {/* <div className="text-center pt-3 pb-3">
          <img
            width="150"
            height="150"
            className="img-fluid"
            src={aicte}
            alt="logo"
          />
        </div>
        <h3 className="text-center pb-3" style={{ color: 'blue' }}>
          The AICTE
        </h3> */}
        <br />
        <h3 className="text-danger pb-3">The AICTE</h3>
        <p className="word-align">
          All India Council for Technical Education
          <span className="brackets">(</span>AICTE
          <span className="brackets">)</span> set up in November 1945 is a National-Level Apex
          Statutory Body of Ministry of Human Resource Development{' '}
          <span className="brackets">(</span>MHRD
          <span className="brackets">)</span>, New Delhi. The AICTE is responsible for quality
          monitoring and standards of technical education, and its planned and coordinated
          development in the country. It emphasizes developing high-quality institutions, academic
          excellence, and innovative research, inculcating entrepreneurship, and encouraging
          indigenous technology. The mission of AICTE is to provide affordable education to all and
          make Technical Education in India globally acceptable.
        </p>

        {/* <div className="text-center pt-3 pb-3" id="CSVTU">
          <img
            width="150"
            height="150"
            className="img-fluid"
            src={csvtu}
            alt="logo"
          />
        </div>

        <h3 className="text-center pb-3" style={{ color: 'blue' }}>
          The Host University<span className="brackets">(</span>CSVTU
          <span className="brackets">)</span>
        </h3> */}
        <br />
        <h3 className="text-danger pb-3">
          The Host University<span className="brackets">(</span>CSVTU
          <span className="brackets">)</span>
        </h3>
        <p className="word-align">
          Chhattisgarh Swami Vivekanand Technical University <span className="brackets">(</span>
          CSVTU
          <span className="brackets">)</span> was established by an act{' '}
          <span className="brackets">(</span>No. 25 of 2004
          <span className="brackets">)</span> of the legislature passed by the Chhattisgarh State
          Govt. Assembly vide notification no. 639/21- A/Praroopan/04 dt 21st January 2005 to
          incorporate a University and Technology for the purpose of ensuring systematic, efficient
          and quality education in engineering and technological subjects including Architecture and
          Pharmacy at Research, Postgraduate, Degree and Diploma level.
        </p>
        <p className="word-align">
          The University since its inception in the year 2005 is striving hard to emerge as one of
          the nation’s prominent Universities to fulfil its commitment to the service of state and
          nation. It was inaugurated on 30th April 2005 by the Hon’ble Prime Minister of India Dr.
          Manmohan Singh. Owing to the different reformative measures adopted by the university,
          World Management Congress, Higher Education and Development Summit, conferred the
          “Emerging Technological University of The Year Award” on 30th Dec 2011 during the global
          meet held at world Management Congress New Delhi. The Chief Minister, Chhattisgarh has
          expressed his happiness – which in fact has added another new dimension to the enhancement
          of the visibility of the University in the current challenging scenario of upgrading
          educational standards.
        </p>

        {/* <div className="text-center pt-3 pb-3" id="ssipmt_raipur">
          <img width="150" height="150" className="img-fluid" src={ssipmt} alt="logo" />
        </div>
        <h3 className="text-center pb-3" style={{ color: 'blue' }}>
          The Host institue<span className="brackets">(</span>SSIPMT, Raipur
          <span className="brackets">)</span>
        </h3> */}
        <br />
        <h3 className="text-danger pb-3">
          The Host institue<span className="brackets">(</span>SSIPMT, Raipur
          <span className="brackets">)</span>
        </h3>

        <p className="word-align">
          Shri Shankaracharya Institute of Professional Management & Technology, Raipur is overseen
          by Shri Gangajali Education Society
          <span className="brackets">(</span>SGES
          <span className="brackets">)</span>, Bhilai. Established under the arrangement of
          resolution 28, outlined under M.P. Vishwavidyalaya Adhinium 1973 and AICTE act. affiliated
          to Chhattisgarh Swami Vivekanand Technical University Bhilai. SSIPMT is accredited by two
          important bodies in Technical Education i.e. NBA and NAAC. It fosters an understanding of
          technical and management education to harvest skilled engineers and efficient managers for
          society. The global competitive market requires innovation, transformation and application
          of bold methodologies, knowledge and determination to challenge conventional practices.
          SSIPMT has worked round the clock to achieve this aim in the newlyborn state of
          Chhattisgarh. At the same time, this institution draws its strength from our Indian
          culture. We transform raw minds into professionals through our focus on education,
          research and training practices.
        </p>
        <p className="word-align">
          The Joint Teachers Training Program, organized by the Department of Computer Science and
          Engineering at SSIPMT is an endeavor to equip the faculty with the knowledge of latest
          Outcome Based Education
          <span className="brackets">(</span>OBE
          <span className="brackets">)</span>, its importance and implications in teaching,
          assessment and evaluation. The department’s mission is to impart quality education in line
          with teaching-learning process and this TTP is in line with the same. Computer Science and
          Engineering is one of the most lucrative branches among all engineering streams. This
          branch studies the design, analysis, implementation and application of computation and
          computer technology. Computer Science is a breed of science that constitutes a variety of
          fields like Artificial Intelligence, Machine Learning, Data Science, Cyber Security,
          Network Security, Forensic Science, Neuroscience, Robotics, Image Processing, Simulation
          and Modelling, Business, Law, Medical etc. The department offers one undergraduate course:
          B. Tech
          <span className="brackets">(</span>Computer Science and Engineering
          <span className="brackets">)</span> and one Postgraduate course: M. Tech{' '}
          <span className="brackets">(</span>Artificial Intelligence & Machine Learning
          <span className="brackets">)</span>. The backbone of the department is its at-par-quality
          research of international and national repute, experienced teaching fraternity and latest
          infrastructure. The B. Tech <span className="brackets">(</span>CSE
          <span className="brackets">)</span> program is accredited by the National Board of
          Accreditation <span className="brackets">(</span>NBA
          <span className="brackets">)</span>.
        </p>
      </div>
    </div>
  );
};

export default University;
