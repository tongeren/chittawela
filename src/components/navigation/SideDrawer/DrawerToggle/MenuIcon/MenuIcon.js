import React from 'react';
import classes from './MenuIcon.css';
import menuIconsvg from '../../../../../assets/icons/Menu.svg';

const menuIcon = () => (
    <img className={classes.MenuIcon} src={menuIconsvg} alt="MenuIcon" />
);

export default menuIcon;