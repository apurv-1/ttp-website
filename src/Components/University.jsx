import React from 'react';
import classes from '../Styles/university.module.css';
import ssipmt from '../assets/ssipmt-min.png';
import csvtu from '../assets/csvtu-logo.png';

const University = () => {
  return (
    <div className={classes.root} id="ssipmt_raipur">
      <div className="container pt-5">
        <h1 className="text-center text-primary pb-4">About</h1>
        <div className="text-center pt-3 pb-3">
          <img
            width="150"
            height="150"
            className="img-fluid"
            src={ssipmt}
            alt="logo"
          />
        </div>
        <h3 className="text-center pb-3" style={{ color: 'blue' }}>
          The Host institue(SSIPMT, Raipur)
        </h3>
        <p className="word-align">
<b>Shri Shankaracharya Institute of Professional Management & Technology, Raipur</b> is overseen by Shri Gangajali Education Society ( SGES), Bhilai. Established under arrangement of resolution 28, outlined under M.P. Vishwavidyalaya Adhinium 1973  and  AICTE   act.   affiliated   to   <b>Chhattisgarh Swami Vivekanand TechnicaI University, Bhilai</b> fo ste rs an understanding of technical and management education to harvest skilled engineers and efficient managers for the society. The global competitive market requires innovation, transformation and application of bold methodologies, knowledge and determination to challenge conventional practices. SSIPMT has worked round the clock to achieve this aim in the newly-born state of Chhattisgarh. At the same time, this institution draws its strength from our Indian culture. We transform raw minds into professionals through our focus on education, research and training practices to support the students gain knowledge to renovate and the power to succeed. SSIPMT campus has a conducive and supportive academic ambience facilitating high-quality education and research for more than 2000 students of bachelors, masters and doctoral programs. Two of its undergraduate programs have been <b>Accredited by NBA</b> and the institute itself has been <b>Accredited by NAAC</b>.
        </p>
        <div className="text-center pt-3 pb-3" id="CSVTU">
          <img
            width="150"
            height="150"
            className="img-fluid"
            src={csvtu}
            alt="logo"
          />
        </div>
        <h3 className="text-center pb-3" style={{ color: 'blue' }}>
          The Host University(CSVTU)
        </h3>

        <p className="word-align">
          Chhattisgarh Swami Vivekanand Technical University (CSVTU) was
          established by an act (No. 25 of 2004) of legislature passed by the
          Chhattisgarh State Govt. Assembly vide notification no. 639/21-
          A/Praroopan/04 dt 21st January 2005 to incorporate a University and
          Technology for the purpose of ensuring systematic, efficient and
          quality education in engineering and technological subjects including
          Architecture and Pharmacy at Research, Post graduate, Degree and
          Diploma level. The University since its inception in the year 2005 is
          striving hard to emerge as one of the nation’s prominent Universities
          to fulfill its commitment to the service of state and nation. It was
          inaugurated on 30th April 2005 by the Hon’ble Prime-Minister of India
          Dr. Manmohan Singh. The University without waiting for full-fledged
          infrastructure development started identifying the frontier area of
          research and development and outreach programs for the benefit of the
          society. With this approach several academic programs, seminars,
          workshops and conferences have been conducted by the University during
          past 5 years.
        </p>
        <p className="word-align">
          In order to improve the standards of the education and enable the
          students to acquire the knowledge and skills required in the
          professional world the scheme of teaching, learning and syllabus was
          designed and implemented by way of brainstorming session, taskforce,
          group working and workshops on Redefining the Technical Education. The
          efforts have been widely appreciated and the University has earned
          distinction of introducing soft skills as a part of the curriculum.
          The courses include communication skills, group discussion, human
          values education, health hygiene and yoga, personality development,
          entrepreneurship and project based learning.
        </p>
        <p className="word-align">
          Bhilai Township considered being one of the most eminent education
          hubs in India. The formalities of acquisition of land have been
          completed and construction of the University building and related
          facilities are in progress. The construction of University
          Administrative building is complete.
        </p>
        <p className="word-align">
          <strong>
            Presently there are 44 Engineering Colleges, 1 Architecture
            Institution, 40 Polytechnics and 11 Pharmacy colleges affiliated to
            the University.
          </strong>
          University has introduced digitalized evaluation system over the last
          few years that has brought in a sea- change in the publication of
          result precisely ahead of the schedule, thereby increasing
          substantially the available time for teaching and interaction with the
          students.
        </p>
        <p className="word-align">
          Owing to the different reformative measures adopted by the university,
          <strong>WORLD MANAGEMENT CONGRESS</strong>, Higher Education and
          Development Summit, conferred
          <strong>“EMERGING TECHNOLOGICAL UNIVERSITY OF THE YEAR AWARD”</strong>
          on 30th Dec 2011 during the global meet held at world Management
          Congress New Delhi. The Chief Minister, Chhattisgarh has expressed his
          happiness – which in fact has added another new dimension to the
          enhancement of visibility of the University in the current challenging
          scenario of upgrading educational standards.
        </p>
      </div>
    </div>
  );
};

export default University;
