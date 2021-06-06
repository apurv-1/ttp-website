import React from 'react';
import classes from '../Styles/faculty.module.css';
import details from '../Information/names.json';

const Faculty = () => {
  return (
    <div className={classes.root}>
      <h2 className="text-primary pb-3">Co-ordinating Committee (SSIPMT Raipur)</h2>
      <table>
        <thead>
          <tr>
            <th>Faculty Name</th>
            <th className={classes.center}>Designation</th>
          </tr>
        </thead>
        <tbody>
          {details.map(({ name, designation }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td className={classes.center}>{designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faculty;
