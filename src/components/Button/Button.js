import React from 'react';
import classes from './Button.css';

const BUTTONTEXT = "RESERVE MY SPOT!";

const button = () => (
  <button className={classes.Button}>{BUTTONTEXT}</button>
);

export default button;
