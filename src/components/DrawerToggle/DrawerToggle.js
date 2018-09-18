import React from 'react';
import classes from './DrawerToggle.css';
import MenuIcon from '../../components/MenuIcon/MenuIcon';

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <MenuIcon />
  </div>
);

export default drawerToggle;
