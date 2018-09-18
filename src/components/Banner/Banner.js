import React, { Component } from 'react';
import classes from './Banner.css';

import backGround from '../../assets/images/Banburee/IMG_8560.JPG';

class Banner extends Component {

    render () {
        /* let style = {

        } */

        return (
            <div className={classes.ImageContainer}>
                {/* <div className={classes.Animation}> */}
                <img className={classes.Image} src={backGround} alt="Background"/>
                <div className={classes.LogoAndTagLine}>
                    {this.props.children}
                </div>  
                {/* </div> */}
            </div>
        )
    };
}

export default Banner;
