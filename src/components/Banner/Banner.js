import React from 'react';
import classes from './Banner.css';

import backGround from '../../assets/images/Banburee/IMG_8560.JPG';
import AnimatedIconTripleChevronDown from 
'../../components/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown';

import TagLine from '../../components/TagLine/TagLine';
import BigLogo from '../../components/BigLogo/BigLogo';

const banner = () => (
    <div className={classes.ImageContainer}>
        {/* <div className={classes.Animation}> */}
            <img className={classes.Image} src={backGround} alt="Background"/>
            <div className={classes.LogoAndTagLine}>
                <BigLogo />
                <TagLine />  
                <AnimatedIconTripleChevronDown />
            </div>  
        {/* </div> */}
    </div>
);

export default banner;
