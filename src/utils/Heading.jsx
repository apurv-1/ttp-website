import React from 'react';
import classes from './heading.module.css';

const Heading = ({ name }) => {
  return (
    <div className={classes.div}>
      <span className={classes.topRight}></span>
      <span className={classes.topLeft}></span>
      <h1 className={classes.span}>{name}</h1>
      <span className={classes.bottomLeft}></span>
      <span className={classes.bottomRight}></span>
    </div>
  );
};

export default Heading;
