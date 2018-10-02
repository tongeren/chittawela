import React from 'react';
import classes from './Toolbar.css';
import Button from '../../../components/UI/Button/Button';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/> 
    <p></p>
    <Button /> 
  </header>
);

export default toolbar;