import React from 'react';
import { Image } from 'cloudinary-react';
import classes from './ImageSlide.css';

const imageSlide = (props) => {
    const wrapperStyle =  {
      display: `grid`,
      gridTemplateColumns: `repeat(calc(${props.imgPaths.length}), 1fr)`,
      transform: `translateX(${-100 * props.selectedSlide}vw)`, 
      transition: 'transform ease-out 1.2s'
    }   

    return (
      <div className={classes.Wrapper} style={ wrapperStyle }>
        { props.imgPaths.map((path, i) => <Image key={i} className={classes.Image} publicId={path} />) }
      </div>
    );
}  

export default imageSlide;