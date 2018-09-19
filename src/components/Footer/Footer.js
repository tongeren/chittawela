import React, { Component } from 'react';
import classes from './Footer.css';

class Footer extends Component {
    render () {
      return (
        <footer className={classes.Footer}>
            {this.props.children}
        </footer>
      )};
  }
  
  export default Footer;