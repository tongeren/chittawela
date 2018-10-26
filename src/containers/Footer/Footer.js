import React, { Component } from 'react';
import classes from './Footer.css';
import Music from '../../components/UI/Music/Music';
import AnimatedIconTripleChevronDown from '../../components/navigation/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown';


class Footer extends Component {
    render () {
      return (
        <footer className={classes.Footer}>
          <Music className={classes.ToggleMusic} />
          <AnimatedIconTripleChevronDown className={classes.NextPage} />
        </footer>
      )};
  }
  
  export default Footer;