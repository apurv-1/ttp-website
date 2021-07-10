import React from 'react';
import classes from './heading.module.css';

const Heading = ({ name }) => {
  return (
    <div className={classes.div}>
      <h2 className={classes.span}>{name}</h2>
    </div>
  );
};

export default Heading;
