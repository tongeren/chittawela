import React, { Component } from 'react';
import classes from './Button.css';

const BUTTONTEXT = "RESERVE MY SPOT!";

class Button extends Component {
  render() {
    return (
        <button className={classes.Button}>{BUTTONTEXT}</button>
    );
  }
}

export default Button;
