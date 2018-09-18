import React from 'react';
import classes from './AnimatedIconTripleChevronDown.css';
import tripleChevronDownIcon from '../../assets/icons/TripleChevronDown.svg'

const animatedIconTripleChevronDown = () => (
    <div className={classes.Animation}>
        <img className={classes.Icon} src={tripleChevronDownIcon} alt="MenuIcon" />
    </div>    
);

export default animatedIconTripleChevronDown;