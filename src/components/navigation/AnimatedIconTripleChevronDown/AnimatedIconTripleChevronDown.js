import React from 'react';
import { withRouter } from 'react-router-dom'; // import withRouter in order to use history property
import { nextPage } from '../../../routes/Routes';
import classes from './AnimatedIconTripleChevronDown.css';
import tripleChevronDownIcon from '../../../assets/icons/TripleChevronDown.svg'

const animatedIconTripleChevronDown = (props) => {
    var currentPath = props.location.pathname;
    var page = nextPage(currentPath);

    return(
        <div className={props.className}>
            <div className={classes.Animation}>
                <img className={classes.Icon} onClick={() => props.history.push(page)} src={tripleChevronDownIcon} alt="MenuIcon" />
            </div>      
        </div>
    );       
}

export default withRouter(animatedIconTripleChevronDown);
