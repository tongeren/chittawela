import React from 'react';
import { Image } from 'cloudinary-react';
import classes from './ImageSlide.css';

const imageSlide = (props) => {
  
    return (
      <Image className={classes.Image} publicId={props.publicId}></Image>
    );
}

export default imageSlide;

