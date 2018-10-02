import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { ROUTES } from '../../../routes/Routes';

const navigationItems = (props) => {
  const relabeledRoutes = ROUTES.map(({path, component, navText }) => ({link: path, component , navText}));

  return (
    <ul className={classes.NavigationItems}>
      { relabeledRoutes.map((route, i) => (<NavigationItem key={i} clicked={props.clicked} {...route}>{route.navText}</NavigationItem>)) } 
    </ul>
  );
}


export default navigationItems;