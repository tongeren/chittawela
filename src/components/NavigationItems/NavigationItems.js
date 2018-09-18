import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Home</NavigationItem>
    <NavigationItem link="/explore">Explore</NavigationItem>
    <NavigationItem link="/guide">Your Guide</NavigationItem>
    <NavigationItem link="/sanctuary">Your Sanctuary</NavigationItem>
    <NavigationItem link="/contact">Contact Us</NavigationItem>
  </ul>
);

export default navigationItems;