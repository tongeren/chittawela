import React from 'react';
import classes from './DrawerToggle.css';
import menuIconsvg from '../../../../assets/icons/Menu.svg';

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <img className={classes.MenuIcon} src={menuIconsvg} alt="MenuIcon" />
  </div>
);

export default drawerToggle;
