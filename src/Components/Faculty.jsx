import React from 'react';
import classes from '../Styles/faculty.module.css';
import details from '../Information/names.json';

const Faculty = () => {
  return (
    <div className={classes.root}>
      <table>
        <thead>
          <tr>
            <th>Faculty Name</th>
            <th className={classes.right}>Designation</th>
          </tr>
        </thead>
        <tbody>
          {details.map(({ name, designation }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td className={classes.right}>{designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faculty;
