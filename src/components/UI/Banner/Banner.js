import React from 'react';
import classes from './Banner.css';

import backGround from '../../../assets/images/Banburee/IMG_8560.JPG';

const banner = (props) => (
    <div className={classes.Banner}>
        <img className={[classes.Image, classes.Animation].join(' ')} src={backGround} alt="Background"/>
        <div className={classes.Content}>
            {props.children}
        </div> 
    </div>
);

export default banner;
